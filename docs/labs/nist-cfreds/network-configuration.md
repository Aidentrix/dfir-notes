# Network Configuration

The TCP/IP interface configuration was examined under:

```text
SYSTEM\ControlSet001\services\Tcpip\Parameters\Interfaces
```

## DHCP-enabled interface

The interface:

```text
{E2B9AEEC-B1F7-4778-A049-50D7F2DAB2DE}
```

contained:

```text
EnableDHCP        = 1
DhcpIPAddress     = 10.11.11.129
DhcpSubnetMask    = 255.255.255.0
DhcpServer        = 10.11.11.254
DhcpNameServer    = 10.11.11.2
DhcpDefaultGateway = 10.11.11.2
DhcpDomain        = localdomain
Lease             = 0x708
```

`0x708` is 1800 seconds, or 30 minutes.

## DHCP lease timestamps

These Registry DWORD values use Unix epoch seconds rather than Windows FILETIME:

| Field | Raw value | UTC |
| --- | --- | --- |
| LeaseObtainedTime | 0x5512D216 | 2015-03-25 15:19:50 |
| T1 | 0x5512D59A | 2015-03-25 15:34:50 |
| T2 | 0x5512D83D | 2015-03-25 15:46:05 |
| LeaseTerminatesTime | 0x5512D91E | 2015-03-25 15:49:50 |

The values are internally coherent for a 30-minute lease.

## Lesson

Timestamp decoding is artifact-specific:

```text
SAM last logon      -> Windows FILETIME
ShutdownTime        -> Windows FILETIME
DHCP lease times    -> Unix epoch seconds
```

The correct decoder comes from the field definition, not from guesswork.
