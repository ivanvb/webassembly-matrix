#include <stdio.h>
#include <emscripten.h>

float EMSCRIPTEN_KEEPALIVE sum_up(float *vals, int size) {
  float res = 0;
  for(int i=0; i<size; i++){
    res += vals[i];
    vals[i] = 30;
  }
  return res;
}

int EMSCRIPTEN_KEEPALIVE test(){
  return 30;
}

void EMSCRIPTEN_KEEPALIVE printArr(int *m, int length){
  for(int i = 0; i < length; i++){
    m[i] = 30;
  }
}

void EMSCRIPTEN_KEEPALIVE ijk(int* matrixA, int* matrixB, int* matrixC, int length) {
  for(unsigned int i = 0; i < length; i++){
    for(unsigned int j = 0; j < length; j++) {
      for(unsigned int k = 0; k < length; k++) {
        matrixC[i * length + j] = matrixA[i * length + j];
      }
    }
  }
}
