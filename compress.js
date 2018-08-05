export const compressImage = (src, quality, output_format) => {
  return new Promise((resolve, reject) => {
    const canvasValidFormats = ['jpeg', 'gif', 'bmp', 'tiff', 'tif', 'png']

    if (!canvasValidFormats.includes(src.extension)) {
      reject({
        status: 'error',
        message: 'You enter an unsupported type file.'
      })
    }

    let canvas = document.createElement('canvas')
    let img = document.createElement('img')
    img.src = src

    img.onload = () => {
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight

      canvas.getContext('2d').drawImage(src, 0, 0)
      let compressedImg = canvas.toDataURL(`image/${output_format}`, quality)

      resolve({
        status: 'ok',
        message: 'Compress Image successfully',
        img: compressedImg
      })
    }
  })
}
