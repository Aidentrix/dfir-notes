# Windows Artifacts

This section collects artifact-oriented notes that cross Registry, filesystem, and timeline boundaries.

## Timestamp encodings

Windows does not use one timestamp format everywhere.

Examples encountered in the current lab include:

- 64-bit Windows FILETIME: epoch 1601-01-01, units of 100 nanoseconds
- Unix epoch seconds: epoch 1970-01-01, used by some Registry values such as DHCP lease timestamps

The field definition determines the timestamp format. Never choose a decoder only because the bytes "look like a time."
