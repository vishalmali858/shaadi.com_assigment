import React, { useEffect, useState } from "react";
import { getUserDataPromise, setUserDetailsAsPerRequirement } from "../../globalUtils/globalHelper";
import ListComponent from "../../components/ListComponent/ListComponent";
import ListItemComponent from "../../components/ListItemComponent/ListItemComponent";
import { Divider, useMediaQuery, Grid, Backdrop, CircularProgress } from "@mui/material";
import ContactInfoCard from "../../containers/ContactInfoCard/ContactInfoCard";
import requireAuthentication from "../../components/AuthenticatinComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

function ContactListContainer() {
    const [userList, setUserList] = useState([{
        fname: ""
    }]);
    const [selectedUserId, setSelectedUserList] = useState(-1);
    const [currentSpliceCounter, setCurrentSpliceCounter] = useState(50);
    const [currentFeedbackStatus, setcurrentFeedbackStatus] = useState(false);

    function showMoreClicked(event: any) {
        setcurrentFeedbackStatus(true);
        const timeoutVlue = setTimeout(function () {
            setCurrentSpliceCounter(currentSpliceCounter + 25);
            clearTimeout(timeoutVlue);
            setcurrentFeedbackStatus(false);
        }, 1000);
    }

    function handleUserClick(event: any, uniqueUserID: any) {
        setSelectedUserList(uniqueUserID);
    }

    useEffect(() => {
        let userDetails = getUserDataPromise();
        userDetails.then(function (userList: any) {
            if (userList.hasOwnProperty("results")) {
                const updatedUserList = setUserDetailsAsPerRequirement(userList.results);
                setUserList(updatedUserList);
            } else {
                console.log("error in API random call");
            }
        });
    }, []);

    const matches = useMediaQuery('(min-width:600px)');
    const infoContainer = (selectedUserId !== -1 ? <ContactInfoCard infoDataArray={userList[selectedUserId]} /> : null)

    function getContactListItem(data: any) {
        const { userData, id, showDivider } = data;
        const ListComponentToReturn = <React.Fragment key={id + userData.fname + userData.phoneNumber}>
            {showDivider && <Divider className="contactAlphabetDivider" textAlign="left" component="li">{userData.fname[0]}</Divider>}
            <ListItemComponent
                showAvatar={true}
                onCliCkHandler={(event: any) => handleUserClick(event, id)}
                isSelectedKey={selectedUserId === id ? true : false}
                avatarDetails={{
                    altText: `${userData.fname} ${userData.lname}`,
                    avatarSrc: `${userData.profilePicture}`
                }}
                primaryListText={`${userData.fname} ${userData.lname}`}
            />
            {selectedUserId === id && !matches && infoContainer}
        </React.Fragment>
        return (ListComponentToReturn)
    }

    function getContactListSkeletonItem(id: any) {
        return (
            <React.Fragment key={"skeleton_" + id}>
            <ListItemComponent
                showAvatar={true}
                avatarDetails={{}}
                primaryListText={""}
                isListLoading={true}
            />
            </React.Fragment>
        )
    }

    const skeletonData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const userListComponentItems = userList.length !== 1 ? userList.map(function (userData: any, id: any) {
        const showDivider = id === 0 ? true : userList[id - 1] ? (userList[id - 1].fname[0].toLowerCase() === userList[id].fname[0].toLowerCase() ? false : true) : true;
        return id < currentSpliceCounter ? getContactListItem({ userData, id, showDivider }) : null;
    }) : skeletonData.map(function (data) {
        return getContactListSkeletonItem(data);
    });
    return <><Backdrop sx={{"zIndex": "1"}} open={currentFeedbackStatus}>
        <CircularProgress color="secondary" />
    </Backdrop>
        <Grid container>
            <Grid className={`contactListScrollableDiv`} item xs={(!matches ? 12 : 6)} >
                <ListComponent listItemData={userListComponentItems} />
                {currentSpliceCounter >= userList.length ? null : <ButtonComponent onClickHandler={showMoreClicked} buttonVariant={"contained"} buttonText={"Show More"}></ButtonComponent>}
            </Grid>
            <Grid item xs={6}>
                {matches && infoContainer}
            </Grid>
        </Grid></>
}

export default requireAuthentication(ContactListContainer)