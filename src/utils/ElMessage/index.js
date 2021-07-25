import { ElMessage } from 'element-plus';

export const errorMessage = (text) => ElMessage.error({
  showClose: true,
  message: text,
  type: 'error',
});

export const message = (text) => ElMessage({
  showClose: true,
  message: text,
});

export const successMessage = (text) => ElMessage({
  showClose: true,
  message: text,
  type: 'success',
});
export const warningMessage = (text) => ElMessage({
  showClose: true,
  message: text,
  type: 'warning',
});
