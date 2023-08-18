#!/bin/bash


mkdir -p build


directory
pip install -r requirements.txt -t build/


directory
cp app.py build/


cd build


zip -r9 ../lambda_function.zip .


cd ..


rm -r build/

