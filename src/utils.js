const getReCaptchaToken = action => {
  if (window.grecaptcha) {
    return window.grecaptcha.execute(
      "6Lfx9JoUAAAAAOHf0pQafcxL6BKl_Y1ixRpfrJ0G",
      {
        action: action
      }
    );
  }
};

const registration = (token, paylaod) => {
  return fetch("https://0411mm264v.sse.codesandbox.io/registration", {
    method: "post",
    mode: "cors",
    body: JSON.stringify({ ...paylaod, token })
  }).then(res => res.json());
};

export default {
  getReCaptchaToken,
  registration
};
