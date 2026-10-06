# Windows Forensics

Windows forensic analysis relies on many artifact families rather than one canonical source.

## Artifact families

Common sources include:

- Registry hives
- NTFS metadata
- event logs
- user profile artifacts
- execution and application artifacts
- network configuration
- timestamps from multiple subsystems

## Correlation matters

A single artifact may establish one fact while only suggesting another. Strong conclusions usually come from correlating independent artifacts while preserving the distinction between what each source actually proves.
