import os
import sys
import shutil


dir_1_path = ("dir_1")
dir_2_path = ("dir_2")

if os.path.isdir(dir_1_path) == False:
    sys.exit("Error: source folder is not exist")

if os.path.isdir(dir_2_path) == False:
    os.mkdir(dir_2_path)


dir_1_items = [item for item in os.listdir(dir_1_path)]


for i in dir_1_items:
    shutil.move(f"{dir_1_path}/{i}", f"{dir_2_path}/{i}")

