import api from './api';

const patchModifyPassword = async (modifyInfo: any) => {
  try {
    const response = await api({
      headers: {
        'Content-Type': 'application/json',
      },
      url: `/api/user/password`,
      method: 'PATCH',
      data: JSON.stringify(modifyInfo),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default patchModifyPassword;
