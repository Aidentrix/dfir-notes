# Filesystem Forensics

Filesystem forensics examines the structures a filesystem uses to organize, locate, describe, and recover data.

## Evidence layers

A useful mental model is:

```text
disk
└── partition table
    └── partition
        └── filesystem boot sector
            └── filesystem metadata
                └── file records
                    └── attributes and content
```

Each layer answers a different question. Mixing those layers is a common source of mistakes.

## Disk and partition structures

Before interpreting a filesystem, establish where the filesystem begins and how the disk is partitioned.

### MBR

A traditional MBR contains boot code, a partition table, and the `55 AA` signature. Each partition entry contains fields such as boot status, partition type, starting LBA, and sector count.

### GPT

GPT uses a different partitioning model. A protective MBR commonly uses type `0xEE`, while the GPT header begins at LBA 1 and contains the `EFI PART` signature.

## NTFS

NTFS organizes metadata around the Master File Table.

### Master File Table

MFT records begin with the ASCII signature `FILE`. Record size is filesystem-specific and should be established from the filesystem metadata rather than assumed.

### Attributes

NTFS file records are composed of attributes. Attributes may be resident or non-resident; those terms describe where attribute data is stored, not whether a file is local or network-based.

## Forensic validation

Important conclusions should be traceable to the underlying structure and, when practical, independently validated against raw bytes.
