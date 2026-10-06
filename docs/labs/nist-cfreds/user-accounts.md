# User Accounts

Local account analysis used the SAM hive.

## Account-name to RID mapping

The path:

```text
SAM\SAM\Domains\Account\Users\Names
```

associated the following names with local RIDs:

| Account | RID decimal | RID key |
| --- | ---: | --- |
| informant | 1000 | 000003E8 |
| admin11 | 1001 | 000003E9 |
| ITechTeam | 1002 | 000003EA |
| temporary | 1003 | 000003EB |

A deterministic conversion check is:

```python
for n in (1000, 1001, 1002, 1003):
    print(f"{n} -> 0x{n:X} -> {n:08X}")
```

## SAM F record fields

For this analysis, the binary `F` value was decoded using known SAM structure offsets.

Relevant offsets include:

```text
+0x08..0x0F  last logon FILETIME
+0x30..0x33  RID
+0x40..0x41  failed-logon count
+0x42..0x43  logon count
```

The structure definition tells us where and how to interpret the field. The bytes in the hive provide the actual evidentiary value.

## Results

| Account | RID | Last logon (UTC) | Logons | Failed |
| --- | ---: | --- | ---: | ---: |
| informant | 1000 | 2015-03-25 14:45:59.180205 | 10 | 0 |
| admin11 | 1001 | 2015-03-22 15:57:02.419988 | 2 | 0 |
| ITechTeam | 1002 | Never | 0 | 1 |
| temporary | 1003 | 2015-03-22 15:55:57.259062 | 1 | 1 |

Among these accounts, `informant` has the latest recorded successful SAM last-logon timestamp.

## FILETIME decoding

SAM last-logon timestamps are 64-bit Windows FILETIME values:

```python
from datetime import datetime, timedelta, timezone

epoch = datetime(1601, 1, 1, tzinfo=timezone.utc)
value = int.from_bytes(raw, "little")
timestamp = epoch + timedelta(microseconds=value // 10)
```

Python performs the conversion; it does not determine that a byte range is a SAM last-logon field.
