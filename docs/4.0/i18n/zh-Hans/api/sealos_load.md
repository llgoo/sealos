## sealos load

load cloud image

```
sealos load [flags]
```

### Examples

```
sealos load -i kubernetes.tar
```

### Options

```
  -h, --help               help for load
  -i, --input string       load image from tar archive file
  -t, --transport string   load image transport from tar archive file.(optional value: oci-archive, docker-archive) (default "oci-archive")
```

### Options inherited from parent commands

```
      --cluster-root string   cluster root directory (default "/var/lib/sealos")
      --debug                 enable debug logger
```

### SEE ALSO

* [sealos](sealos.md)	 - simplest way install kubernetes tools.

###### Auto generated by spf13/cobra on 13-Oct-2022
