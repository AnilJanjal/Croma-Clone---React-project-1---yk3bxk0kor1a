const PROJECT_ID = "yk3bxk0kor1a";

export const getHeaderWithProjectId = () => {
  return {
    headers: { projectId: PROJECT_ID },
  };
};

export const getToken = () => {
  const token = sessionStorage.getItem("authToken");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const getCntCartItem = () => {
  const cntItem = sessionStorage.getItem("noOfItems");
  if (!cntItem) {
    return 0;
  }
  return cntItem;
};

export const getAuthHeaderConfig = () => {
  const token = sessionStorage.getItem("authToken");
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: PROJECT_ID,
      },
    };
  } else {
    return {
      error: "user not logged in",
    };
  }
};
export const getAuthHeaderConfigWithContent = () => {
  const token = sessionStorage.getItem("authToken");
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: PROJECT_ID,
        "Content-Type": "application/json",
      },
    };
  } else {
    return {
      error: "user not logged in",
    };
  }
};
