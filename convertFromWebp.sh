
source ~/.bash_profile
cd assets
for f in ./*.webp; do
    /c/Users/michael-maddenPC/Downloads/libwebp-0.4.1-windows-x86/libwebp-0.4.1-windows-x86/bin/cwebp.exe $f -o $f
done
