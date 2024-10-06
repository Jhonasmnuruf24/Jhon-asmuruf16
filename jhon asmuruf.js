import numpy as np
import imageio
import matplotlib.pyplot as plt

# Load images
images = {
    "Daun Pepaya": imageio.imread('daun_pepaya.jpg'),
    "Singkong": imageio.imread('singkong.jpg'),
    "Kenikir": imageio.imread('kenikir.jpg')
}

for name, img in images.items():
    # a) Channel Warna R (Red)
    red_channel = img[:, :, 0]

    # b) Channel Warna G (Green)
    green_channel = img[:, :, 1]

    # c) Channel Warna B (Blue)
    blue_channel = img[:, :, 2]

    # d) Konversi Warna Grayscale
    gray_image = 0.2989 * red_channel + 0.5870 * green_channel + 0.1140 * blue_channel

    # e) Konversi Warna Threshold (Biner)
    threshold_value = 128
    binary_image = (gray_image > threshold_value).astype(np.uint8) * 255

    # Display results
    plt.figure(figsize=(12, 8))
    
    plt.subplot(2, 3, 1)
    plt.title(f'{name} - Red Channel')
    plt.imshow(red_channel, cmap='Reds')
    
    plt.subplot(2, 3, 2)
    plt.title(f'{name} - Green Channel')
    plt.imshow(green_channel, cmap='Greens')
    
    plt.subplot(2, 3, 3)
    plt.title(f'{name} - Blue Channel')
    plt.imshow(blue_channel, cmap='Blues')
    
    plt.subplot(2, 3, 4)
    plt.title(f'{name} - Grayscale')
    plt.imshow(gray_image, cmap='gray')
    
    plt.subplot(2, 3, 5)
    plt.title(f'{name} - Binary Image')
    plt.imshow(binary_image, cmap='gray')

    plt.axis('off')
    plt.tight_layout()
    plt.show()

