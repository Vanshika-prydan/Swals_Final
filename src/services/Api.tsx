import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL = 'https://swalsapp.com/s-s/public/api/';

const getAccessToken = async () => {
  const UserDetails = await AsyncStorage.getItem('UserDetails');
  const finalUserDetails = JSON.parse(UserDetails);
  return finalUserDetails && finalUserDetails.access_token ? finalUserDetails.access_token : '' ;
};

export const signUp = (name, email, password) => {
  const URL = BASE_URL + 'auth/register';

  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      name: name,
      email: email,
      password: password,
    });
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios
      .post(URL, data, options)
      .then(async response => {
        resolve(response);
      })
      .catch(({error, response}) => {
        resolve(response.data);
      });
  });
};

const LogIn = async (email, password) => {
  const URL = BASE_URL + 'auth/login';

  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      email: email,
      password: password,
    });
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios
      .post(URL, data, options)
      .then(async response => {
        resolve(response);
      })
      .catch(({error, response}) => {
        if (response && response.data && response.data.message) {
          Alert.alert('Error', response.data.message);
        } else {
          Alert.alert('Error', 'Invalid email or password.!');
        }
        // Alert.alert('Error', 'Invalid email or password.!');
        resolve(response);
      });
  });
};

export const ForgotPassword = email => {
  const URL = BASE_URL + 'auth/forgot-password';

  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      email: email,
    });
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios
      .post(URL, data, options)
      .then(async response => {
        resolve(response);
      })
      .catch(({error, response}) => {
        resolve(response);
      });
  });
};

export const otpVerify = (email, otp) => {
  const URL = BASE_URL + 'auth/code-varification';

  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      email: email,
      otp: otp,
    });
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios
      .post(URL, data, options)
      .then(async response => {
        resolve(response);
      })
      .catch(({error, response}) => {
        // handle error
        resolve(response);
      });
  });
};

export const setNewPassword = (password, email, otp) => {
  const URL = BASE_URL + 'auth/new-password';

  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      password: password,
      email: email,
      otp: otp,
    });
    // console.log(data);
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios
      .post(URL, data, options)
      .then(async response => {
        resolve(response);
      })
      .catch(({error, response}) => {
        resolve(response);
      });
  });
};

export const enrollUpload = (name, upload, enrollment_id) => {
  const URL = BASE_URL + 'enrollment-upload';

  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('upload', upload[0]);
    formData.append('enrollment_id', enrollment_id + '');
    
    const options = {
      headers: {
        'Content-Type': 'multipart/form-data; ',
        Authorization: 'Bearer ' + access_token,
      },
    };
    axios
      .post(URL, formData, options)
      .then(async response => {
        // console.log('response : ', JSON.stringify(response));

        resolve(response);
      })
      .catch(({response}) => {
        console.log('response : ', JSON.stringify(response));
        resolve(response);
      });
  });
};

export const enrollmentSubmit = (
  name,
  countryName,
  companyName,
  serviceName,
  phone,
) => {
  const URL = BASE_URL + 'enrollment-submit';

  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const data = JSON.stringify({
      name: name,
      country_name: countryName,
      company_name: companyName,
      services_id: serviceName,
      phone: phone,
    });
    // console.log('data>>', data);
    // const formData = new FormData();
    // formData.append('data', data);
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
      },
    };
    axios
      .post(URL, data, options)
      .then(async response => {
        resolve(response.data);
      })
      .catch(({response, error}) => {
        resolve(response.data);
      });
  });
};

export const dashBoard = () => {
  const URL = BASE_URL + 'dashboard';

  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const data = JSON.stringify({});
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
      },
    };
    axios
      .post(URL, data, options)
      .then(async response => {
        resolve(response);
      })
      .catch(({error, response}) => {
        // handle error
        resolve(response);
      });
  });
};

export const services = () => {
  const URL = BASE_URL + 'services';

  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
      },
    };
    // console.log('options :', JSON.stringify(options));

    axios
      .get(URL, options)
      .then(async response => {
        // console.log('response :', JSON.stringify(response));
        resolve(response);
      })
      .catch(({error, response}) => {
        // handle error
        resolve(response);
      });
  });
};

export const news = () => {
  const URL = BASE_URL + 'news';
  return new Promise(async (resolve, reject) => {
    // const access_token = await getAccessToken();
    const options = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + access_token,
      },
    };
    // console.log('options :', JSON.stringify(options));
    axios
      .get(URL, options)
      .then(async response => {
        // console.log('response : ', JSON.stringify(response));
        resolve(response);
      })
      .catch(({error, response}) => {
        // handle error
        resolve(response);
      });
  });
};

export const terms = () => {
  const URL = BASE_URL + 'terms';

  return new Promise(async (resolve, reject) => {
    // const access_token = await getAccessToken();
    const options = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + access_token,
      },
    };
    axios
      .get(URL, options)
      .then(async response => {
        resolve(response);
      })
      .catch(({error, response}) => {
        // handle error
        resolve(response);
      });
  });
};

export const help = () => {
  const URL = BASE_URL + 'help';
  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
      },
    };
    axios
      .get(URL, options)
      .then(async response => {
        resolve(response);
      })
      .catch(({error, response}) => {
        // handle error
        resolve(response);
      });
  });
};

export const countries = () => {
  const URL = BASE_URL + 'country';
  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
      },
    };
    axios
      .get(URL, options)
      .then(async response => {
        resolve(response);
      })
      .catch(({error, response}) => {
        // handle error
        resolve(response);
      });
  });
};
export const privacy = () => {
  const URL = BASE_URL + 'privacy';
  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
      },
    };
    axios
      .get(URL, options)
      .then(async response => {
        resolve(response);
      })
      .catch(({error, response}) => {
        // handle error
        resolve(response);
      });
  });
};

export const logout = () => {
  const URL = BASE_URL + 'auth/logout';
  // console.log('LogOut URL : ' + URL);

  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const data = JSON.stringify({});
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
      },
    };
    axios
      .post(URL, data, options)
      .then(async response => {
        // console.log('LogOut Resp : ', JSON.stringify(response.data));
        resolve(response);
      })
      .catch(error => {
        // handle error
        const createResp = {
          status: 403,
          message:
            'The access token has expired and the user signs out successfully',
        };
        console.log('LogOut error : ', error);
        resolve(createResp);
      });
  });
};

export default LogIn;
