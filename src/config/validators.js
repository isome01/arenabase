
const Validators = {}

Validators.isVideoExt = text => text.match(
  /\.(MPG|MP2|MPEG|MPE|MPV|OGG|MP4|M4P|M4V|AVI|WMV|MOV|QT|FLV|SWF|AVCHD|mpg|mp2|mpeg|mpe|mpv|ogg|mp4|m4p|m4v|avi|wmv|mov|qt|flv|swf|avchd)$/g
)

Validators.isImageExt = text => text.match(
  /\.(PNG|JPG|SVG|JPEG|WEBP|TIFF|PSD|RAW|BMP|GIF|HEIF|INDD|png|jpg|svg|jpeg|webp|tiff|psd|raw|bmp|gif|heif|indd)$/g
)

export default Validators
