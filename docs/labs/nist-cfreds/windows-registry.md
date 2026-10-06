# Windows Registry

Registry hives were extracted from the NTFS filesystem and validated by their `regf` hive signature.

## Operating system information

The following path contains build information:

```text
SOFTWARE\Microsoft\Windows NT\CurrentVersion
```

Observed values include:

```text
CurrentBuildNumber = 7601
CSDVersion         = Service Pack 1
BuildLab           = 7601.win7sp1_gdr.130828-1532
BuildLabEx         = 7601.18247.amd64fre.win7sp1_gdr.130828-1532
PathName           = C:\Windows
```

These values support Windows build 7601, Service Pack 1, and an amd64/x64 build family.

## Time zone

From:

```text
SYSTEM\ControlSet001\Control\TimeZoneInformation
```

the relevant values were:

```text
TimeZoneKeyName            = Eastern Standard Time
Bias                       = 300
ActiveTimeBias             = 240
DynamicDaylightTimeDisabled = 0
```

Windows bias uses the relationship:

```text
UTC = local time + bias
```

The effective recorded bias therefore corresponds to UTC-4 at the time represented by `ActiveTimeBias`.

## Computer name

From:

```text
SYSTEM\ControlSet001\Control\ComputerName\ComputerName
```

the observed computer name was:

```text
INFORMANT-PC
```

No `ActiveComputerName` subkey was assumed when it was not present in this image.
