# Tooling

Tools are selected according to the artifact and the validation question.

## Sleuth Kit

Useful commands include:

```text
fdisk   partition geometry
fsstat  filesystem metadata
fls     directory and file enumeration
istat   filesystem metadata for a record
icat    file-content extraction
```

For the current image, Sleuth Kit partition offsets supplied with `-o` are expressed in sectors.

## xxd

`xxd` is useful for deterministic byte-level inspection:

```bash
xxd -g 1 -s OFFSET -l LENGTH image.dd
```

- `-s` seeks to an offset
- `-l` limits the number of bytes
- `-g 1` groups output by individual bytes

`-s` is a seek operation, not a search operation.

## hivex

`hivexsh` is useful for interactive Registry-hive navigation, while `hivexget` can retrieve a specific raw Registry value for scripted validation.

## Python

Small Python snippets are used for deterministic decoding and repetitive conversion. The artifact structure must still establish what the selected bytes mean.
