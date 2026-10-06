# NIST CFReDS Data Leakage Case

This lab uses the public NIST CFReDS Data Leakage Case dataset as a forensic training source.

## Purpose

The objective is to derive answers independently from the image, then trace each conclusion back to the artifact that supports it.

## Working approach

The analysis uses tools such as Sleuth Kit, `xxd`, `hivexsh`, `hivexget`, and small Python snippets for deterministic decoding.

The operating rule is:

> **Recognize enough to orient. Validate enough to trust the interpretation. Look up the exact structure when precision matters.**

## Current progression

The current study has covered:

- MBR partition validation
- NTFS boot-sector and MFT location reasoning
- Windows Registry hive extraction and inspection
- operating system and timezone artifacts
- computer name
- local user account mapping
- SAM account metadata
- shutdown time
- DHCP configuration and lease timestamps
