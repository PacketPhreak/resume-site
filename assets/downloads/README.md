# Th3 t00lB0x release files

Put public application packages in this directory, then add or update their catalog entry in:

```text
assets/js/toolbox-catalog.js
```

For every public release:

1. Use a versioned filename, such as `PacketPhreak-Flippa-1.0-RC2.zip`.
2. Include release notes, install steps, requirements, limits, and recovery instructions.
3. Generate a SHA-256 checksum.
4. Set the catalog entry's `downloadUrl`, `sha256`, and `available: true`.
5. Test the download from a clean local web server before deployment.

PowerShell checksum command:

```powershell
Get-FileHash .\PacketPhreak-Flippa-1.0-RC2.zip -Algorithm SHA256
```

Linux or macOS checksum command:

```bash
shasum -a 256 PacketPhreak-Flippa-1.0-RC2.zip
```

Do not upload secrets, internal infrastructure details, unsanitized logs, signing keys, or test captures.
