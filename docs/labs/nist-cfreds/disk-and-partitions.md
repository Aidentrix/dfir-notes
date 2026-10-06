# Disk and Partitions

## Image geometry

The training image is a 20 GiB disk image with 512-byte logical sectors.

`fdisk -l` identified an MBR/DOS partition table with disk identifier:

```text
0xf0265720
```

## MBR validation

The MBR contains the expected `55 AA` signature at offsets `0x1FE-0x1FF`.

### Partition 1

The first partition entry begins at offset `0x1BE`.

Observed fields include:

```text
Boot flag:       0x80
Partition type:  0x07
Start LBA:       2048
Sector count:    204800
```

The byte offset is:

```text
2048 × 512 = 1,048,576 bytes = 0x100000
```

### Partition 2

The second partition begins at LBA:

```text
206848
```

with:

```text
41,734,144 sectors
```

Its byte offset is:

```text
206848 × 512 = 105,906,176 bytes = 0x6500000
```

## Interpretation limits

Partition type `0x07` is a partition-type hint. It is not, by itself, proof that a partition contains NTFS. Filesystem structures must be examined independently.
