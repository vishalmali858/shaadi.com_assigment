export function getUserDataPromise() {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('GET', "https://randomuser.me/api/?exc=login&results=500&nat=us,dk,fr,gb");
    req.onload = function () {
      if (req.status === 200) {
        resolve(JSON.parse(req.response));
      } else {
        reject({ errorCode: req.status });
      }
    };
    req.send();
  })
}

const APIFieldMappingArray = [
  "email",
  "gender",
  "picture.thumbnail",
  "picture.large",
  "name.first",
  "name.last",
  "name.title",
  "cell",
  "dob.age",
  "dob.date",
  "nat",
  "location.street.name",
  "location.street.number",
  "location.city",
  "location.postcode",
  "location.state",
  "location.country",
];
const originalFieldMappingArray = [
  "emailId",
  "gender",
  "profilePicture",
  "profilePictureLarge",
  "fname",
  "lname",
  "salutation",
  "phoneNumber",
  "age",
  "birthDate",
  "nationality",
  "userStreetName",
  "userStreetNumber",
  "userCity",
  "userPostCode",
  "userState",
  "userLocationCountry"
];

function getObjectDataFunction(obj: any, pathArray: any) {
  let tempObj: any = {};
  pathArray.split(".").forEach(function (key: any) {
    tempObj = tempObj[key] || obj[key];
  });
  return { hasData: tempObj !== undefined, dataRetrieved: tempObj }
}

export function setUserDetailsAsPerRequirement(userListArray: any) {
  return userListArray.map(function (userData: any) {
    let userObj: any = {};
    APIFieldMappingArray.forEach(function (fieldNames: any, fieldIndex: any) {
      const { hasData, dataRetrieved } = getObjectDataFunction(userData, fieldNames);
      if (hasData) {
        userObj[originalFieldMappingArray[fieldIndex]] = dataRetrieved;
      }
    })
    return userObj;
  }).sort(function (fElement: any, sElement: any) {
    let firstElementToCompare = (fElement && fElement.fname.toLowerCase()) || "";
    let secondElementToCompare = (sElement && sElement.fname.toLowerCase()) || "";
    return firstElementToCompare < secondElementToCompare ? -1 : 1;
  });
}

export function getDateInFormat(dateSent: any) {
  return `${new Date(dateSent).getDate().toString()} ${new Date(dateSent).toLocaleString('default', { month: 'long' })} ${new Date(dateSent).getFullYear()}`
}

export function capitalizeFirstLetter(stringR: any) {
  return stringR[0].toUpperCase() + stringR.slice(1);
}
