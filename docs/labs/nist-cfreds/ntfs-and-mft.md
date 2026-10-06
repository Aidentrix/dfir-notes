# NTFS and MFT

## Filesystem identification

Sleuth Kit `fsstat` on the second partition established NTFS filesystem metadata including:

```text
Sector size:       512 bytes
Cluster size:      4096 bytes
MFT record size:   1024 bytes
Root directory:    MFT record 5
MFT cluster:       786432
MFT mirror:        cluster 2
```

The `Version: Windows XP` text reported by `fsstat` is an NTFS filesystem-version label; it does not establish that the installed operating system was Windows XP.

## Locating the MFT

The MFT offset relative to the start of the NTFS partition is:

```text
786432 × 4096 = 0xC0000000
```

The second partition begins at:

```text
0x06500000
```

Therefore the absolute MFT offset in the disk image is:

```text
0xC0000000 + 0x06500000 = 0xC6500000
```

With 1024-byte records, the first records begin at:

```text
Record 0: 0xC6500000
Record 1: 0xC6500400
Record 2: 0xC6500800
Record 3: 0xC6500C00
```

## Raw validation

An MFT record begins with:

```text
46 49 4c 45
```

which is the ASCII signature:

```text
FILE
```

The signature helps orient the examination, but coherent surrounding structure is what makes the interpretation defensible.
