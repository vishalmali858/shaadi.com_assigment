import { Box, Tabs, Tab, Card, Paper, CardContent, Chip, Avatar, CardHeader } from "@mui/material";
import { useState } from "react";
import { TAB_DATA_ARRAY } from "../../globalUtils/globalImage";
import { getDateInFormat, capitalizeFirstLetter } from "../../globalUtils/globalHelper";
import LabelComponent from "../../components/LabelComponent/LabelComponent";

interface Iprops {
    infoDataArray: any;
}

function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box className={"tabPanelDataInnerDetails"} sx={{ p: 3 }}>
                    <LabelComponent displayText={children} variantType="div" />
                </Box>
            )}
        </div>
    );
}

function ContactInfoCard(props: Iprops) {
    const { infoDataArray } = props;
    const { emailId, gender, profilePictureLarge, fname, lname, salutation, phoneNumber, age, birthDate, nationality, userStreetName, userStreetNumber, userCity, userPostCode, userState, userLocationCountry } = infoDataArray;

    const [value, setValue] = useState('personal');

    const handleChange = (event: any, newValue: string) => {
        setValue(newValue);
    };

    const pInfoArrayHeader = ["Gender", "Age", "DOB", "Nationality"];
    const pInfoArrayDetails = [capitalizeFirstLetter(gender), age, getDateInFormat(birthDate), nationality]

    const pAddArrayHeader = ["Street", "City", "Postal Code", "State", "Country"];
    const pAddArrayDetails = [userStreetNumber + userStreetName, userCity, userPostCode, userState, userLocationCountry];

    const pContactArrayHeader = ["Email Id", "Phone Number"];
    const pContactArrayDetails = [emailId, phoneNumber];

    return (<Card className={"cardInfo"}>
        <CardHeader
            avatar={<Avatar sx={{ width: "60px", height: "60px" }} src={profilePictureLarge} />}
            title={<LabelComponent displayText={`${salutation} ${fname} ${lname}`} variantType="h6" />}
        />
        <CardContent>
            <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
            >
                {TAB_DATA_ARRAY.map(function (tabData) {
                    return <Tab {...tabData} />
                })}
            </Tabs>
            <TabPanel value={value} index={"personal"} >
                {pInfoArrayHeader.map(function (details, ind) {
                    return (<Paper key={`personal_${ind}`} className={"cardInfoDetails"}>
                        <LabelComponent displayText={details} variantType="h6" />
                        <Chip className={"cardInfoChipDetails"} variant={"outlined"} label={<LabelComponent styleAttr={{ "textOverflow": "ellipsis", "overflow": "hidden" }} displayText={pInfoArrayDetails[ind]} variantType="body2" />} />
                    </Paper>)
                })}
            </TabPanel>
            <TabPanel value={value} index={"address"} >
                {pAddArrayHeader.map(function (details, ind) {
                    return (<Paper key={`address_${ind}`} className={"cardInfoDetails"}>
                        <LabelComponent displayText={details} variantType="h6" />
                        <Chip className={"cardInfoChipDetails"} variant={"outlined"} label={<LabelComponent styleAttr={{ "textOverflow": "ellipsis", "overflow": "hidden" }} displayText={pAddArrayDetails[ind]} variantType="body2" />} />
                    </Paper>)
                })}
            </TabPanel>
            <TabPanel value={value} index={"contact"} >
                {pContactArrayHeader.map(function (details, ind) {
                    return (<Paper key={`contact_${ind}`} className={"cardInfoDetails"}>
                        <LabelComponent displayText={details} variantType="h6" />
                        <Chip className={"cardInfoChipDetails"} variant={"outlined"} label={<LabelComponent styleAttr={{ "textOverflow": "ellipsis", "overflow": "hidden" }} displayText={pContactArrayDetails[ind]} variantType="body2" />} />
                    </Paper>)
                })}
            </TabPanel>
        </CardContent>
    </Card>)
}

export default ContactInfoCard