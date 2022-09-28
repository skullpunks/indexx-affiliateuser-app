import { useState } from "react";

import { MenuItem, Select, TextField } from "@material-ui/core";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import countries from "i18n-iso-countries";
// Import the languages you want to use
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LogoIcon from "./indexx_affiliate_logo.png";
import timezones from "./timezones";
import * as axios from "axios";
// import Footer from "../src/components/Footer.component";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <AddIcon {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedTimeZone, setSelectedTimezone] = useState("");
  const [selectedSocialMedia, setSocialMedia] = useState("");
  const [selectedPlaftormCommunity, setPlaftormCommunity] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [emailConfirm, setConfirmEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [streetAddress1, setStreetAddress1] = useState("");
  const [streetAddress2, setStreetAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [socialMediaUsername, setsocialMediaUsername] = useState("");
  const [affiliateType, setAffiliateType] = useState("");
  const [extraInformation, setExtraInformation] = useState("");
  const [isCompany, setIsCompany] = useState(false);

  const selectCountryHandler = (value) => setSelectedCountry(value);
  const selectTimeZoneHandler = (value) => setSelectedTimezone(value);
  const selectSocialMediaHandler = (value) => setSocialMedia(value);
  const selectIsCompanyHandler = (value) => setIsCompany(value);
  const selectPlaftormCommunityHandler = (value) => setPlaftormCommunity(value);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Have to register the languages you want to use
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);

  // Returns an object not a list
  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const socialMediaArr = [
    {
      optionKey: "platform-twitter",
      i18nKey: null,
      value: "Twitter",
    },
    {
      optionKey: "platform-youtube",
      i18nKey: null,
      value: "Youtube",
    },
    {
      optionKey: "platform-facebook",
      i18nKey: null,
      value: "Facebook",
    },
    {
      optionKey: "platform-instagram",
      i18nKey: null,
      value: "Instagram",
    },
    {
      optionKey: "platform-tiktok",
      i18nKey: null,
      value: "Tiktok",
    },
    {
      optionKey: "platform-telegram",
      i18nKey: null,
      value: "Telegram",
    },
    {
      optionKey: "platform-twich",
      i18nKey: null,
      value: "Twitch",
    },
    {
      optionKey: "platform-other",
      i18nKey: "activity-kol-option-other",
      value: "Other",
    },
  ];
  const platformCommunityArr = [
    {
      optionKey: "content-information",
      i18nKey: "activity-kol-content-information",
      value: "Informational/News",
    },
    {
      optionKey: "content-trading",
      i18nKey: "activity-kol-content-trading",
      value: "Trading Strategy",
    },
    {
      optionKey: "content-promotion",
      i18nKey: "activity-kol-content-promotion",
      value: "Promotions/Sponsorships",
    },
    {
      optionKey: "content-others",
      i18nKey: "activity-kol-option-other",
      value: "Other",
    },
  ];

  const affiliateTypeArr = [
    {
      optionKey: "Crypto Influencer (Individual)",
      value: "Crypto Influencer (Individual)",
    },
    {
      optionKey: "Crypto Institution/Organization",
      value: "Crypto Institution/Organization",
    },
    {
      optionKey: "Social Influencer (Non-Crypto Community)",
      value: "Social Influencer (Non-Crypto Community)",
    },
    {
      optionKey: "Non-Crypto Institution/Organization",
      value: "Non-Crypto Institution/Organization",
    },
  ];
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Email:", email);
    console.log("fname", firstName);
    console.log("lname", lastName);
    console.log("phone:", phoneNumber);
    console.log("selectedCountry:", selectedCountry);
    console.log("selectedTimeZone:", selectedTimeZone);
    console.log("selectedSocialMedia:", selectedSocialMedia);
    console.log("selectedPlaftormCommunity:", selectedPlaftormCommunity);
    console.log("socialMediaUsername:", socialMediaUsername);
    console.log("affiliateType:", affiliateType);
    console.log("extraInformation:", extraInformation);
    console.log("companyURL:", companyURL);
    console.log("streetAddress1:", streetAddress1);
    console.log("streetAddress2:", streetAddress2);
    console.log("city:", city);
    console.log("zipCode:", zipCode);
    console.log("userName:", userName);
    console.log("password:", password);
    console.log("confirmPassword:", confirmPassword);
    console.log("emailConfirm:", emailConfirm);
    console.log("isCompany:", isCompany);
    // You should see email and password in console.
    // ..code to submit form to backend here...
    const response = await axios.post(`http://localhost:5000/api/v1/addaffiliateuser`, {
      email,
      userName,
      password,
      confirmPassword,
      isCompany,
      firstName,
      lastName,
      phoneNumber,
      selectedCountry,
      selectedTimeZone,
      selectedSocialMedia,
      selectedPlaftormCommunity,
      socialMediaUsername,
      affiliateType,
      extraInformation,
      companyURL,
      streetAddress1,
      streetAddress2,
      city,
      zipCode,
      emailConfirm,
    });

    console.log(response);
    if(response.status === 200){
      console.log("success");
      alert("success. We are reviewing you appplication. You receive an email when your application is approved");
    } else {
      alert("Something went error! Please contact us support@indexx.ai");
    }
  }

  return (
    <div>
      <div className="center">
        <img src={LogoIcon} alt="indexx logo" />{" "}
      </div>
      <br></br>
      <br></br>
      <hr></hr>
      <div className="center">
        <h4>Already have an account? Log In</h4>
      </div>
      <h3 className="center">Join The Indexx Affiliate Program</h3>
      <div className="center">
        <p className="padded-multiline">
          Believe you can exchange the world for the better with Bitcoin,
          Blockchain, and Indexx? Join the Indexx Affiliate Program, and get
          rewarded for your efforts when you introduce your world to Indexx, the
          world’s leading cryptocurrency exchange. Please complete this form and
          we will reach out to you if you meet the program criteria. For
          information regarding the Indexx Affiliate Program contact
          support@indexx.ai .
        </p>
      </div>
      <div className="form-center">
        <form className="form-inline" onSubmit={handleSubmit}>
          <br></br>
          <hr></hr>
          <h3>YOUR INFORMATION</h3>
          <br></br>
          <label>Full Name</label>
          <TextField
            id="firstName"
            placeholder="First Name"
            variant="outlined"
            value={firstName}
            onInput={(e) => setFirstName(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="lastName"
            placeholder="Last Name"
            variant="outlined"
            value={lastName}
            onInput={(e) => setLastName(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Email</label>
          <TextField
            id="email"
            placeholder="you@yourdomain.com"
            variant="outlined"
            style={{ width: "384px" }}
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Email(Confirm)</label>
          <TextField
            id="email"
            placeholder="Email(Confirm)"
            variant="outlined"
            style={{ width: "384px" }}
            value={emailConfirm}
            onInput={(e) => setConfirmEmail(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Username</label>
          <TextField
            id="username"
            placeholder="Username"
            variant="outlined"
            style={{ width: "384px" }}
            value={userName}
            onInput={(e) => setUserName(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Password</label>
          <TextField
            id="password"
            placeholder="Password"
            variant="outlined"
            style={{ width: "384px" }}
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Password(Confirm)</label>
          <TextField
            id="passwordconfirm"
            placeholder="Password(Confirm)"
            variant="outlined"
            style={{ width: "384px" }}
            value={confirmPassword}
            onInput={(e) => setConfirmPassword(e.target.value)}
          />
          <br></br> <br></br> <br></br>
          <h3>COMPANY/INDIVIDUAL INFORMATION</h3>
          <br></br>
          <br></br>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={isCompany}
              onChange={(e) => selectIsCompanyHandler(e.target.value)}
            >
              <label>Are you a company?</label>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <br></br>
          <br></br>
          <label>Account Display Name</label>
          <TextField
            id="displayName"
            placeholder="Account Display Name"
            variant="outlined"
            style={{ width: "384px" }}
            value={displayName}
            onInput={(e) => setDisplayName(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Company Website</label>
          <TextField
            id="displayName"
            placeholder="www.yourdomain.com"
            variant="outlined"
            style={{ width: "384px" }}
            value={companyURL}
            onInput={(e) => setCompanyURL(e.target.value)}
          />
          <br></br>
          <br></br>
          <label> Country</label>{" "}
          <Select
            style={{ width: "384px" }}
            value={selectedCountry}
            variant="outlined"
            onChange={(e) => selectCountryHandler(e.target.value)}
          >
            {!!countryArr?.length &&
              countryArr.map(({ label, value }) => (
                <MenuItem key={value} value={label}>
                  {label}
                </MenuItem>
              ))}
          </Select>
          <br></br>
          <br></br>
          <label>Street Address 1</label>
          <TextField
            id="streetaddress1"
            placeholder="Street Address 1"
            variant="outlined"
            style={{ width: "384px" }}
            value={streetAddress1}
            onInput={(e) => setStreetAddress1(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Street Address 2</label>
          <TextField
            id="streetaddress2"
            placeholder="Street Address 2"
            variant="outlined"
            style={{ width: "384px" }}
            value={streetAddress2}
            onInput={(e) => setStreetAddress2(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>City, Zip</label>
          <TextField
            id="city"
            placeholder="City"
            variant="outlined"
            style={{ width: "384px" }}
            value={city}
            onInput={(e) => setCity(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="zip"
            placeholder="Zip"
            variant="outlined"
            style={{ width: "384px" }}
            value={zipCode}
            onInput={(e) => setZipCode(e.target.value)}
          />
          <br></br>
          <br></br>
          <label> Phone Number</label>
          <TextField
            id="phone"
            placeholder="Enter the phone number"
            variant="outlined"
            style={{ width: "384px" }}
            value={phoneNumber}
            onInput={(e) => setPhoneNumber(e.target.value)}
          />
          <br></br>
          <br></br>
          <label> Timezone</label>{" "}
          <Select
            style={{ width: "384px" }}
            value={selectedTimeZone}
            variant="outlined"
            onChange={(e) => selectTimeZoneHandler(e.target.value)}
          >
            {!!timezones?.length &&
              timezones.map(({ text, value }) => (
                <MenuItem key={text} value={text}>
                  {text}
                </MenuItem>
              ))}
          </Select>
          <br></br>
          <br></br>
          <label>How do we contact you? (through Social Media)*</label>
          <Select
            style={{ width: "384px" }}
            value={selectedSocialMedia}
            variant="outlined"
            onChange={(e) => selectSocialMediaHandler(e.target.value)}
          >
            {!!socialMediaArr?.length &&
              socialMediaArr.map(({ optionKey, value }) => (
                <MenuItem key={optionKey} value={value}>
                  {value}
                </MenuItem>
              ))}
          </Select>
          <br></br>
          <br></br>
          <label>Username (to contact you on Social Media)* </label>
          <TextField
            id="socialmediaUsername"
            placeholder="Enter username"
            variant="outlined"
            style={{ width: "384px" }}
            value={socialMediaUsername}
            onInput={(e) => setsocialMediaUsername(e.target.value)}
          />
          <br></br>
          <br></br>
          <br></br>
          <label>Select your Affiliate type</label>{" "}
          <Select
            style={{ width: "384px" }}
            value={affiliateType}
            variant="outlined"
            onChange={(e) => setAffiliateType(e.target.value)}
          >
            {!!affiliateTypeArr?.length &&
              affiliateTypeArr.map(({ optionKey, value }) => (
                <MenuItem key={value} value={value}>
                  {optionKey}
                </MenuItem>
              ))}
          </Select>
          <br></br>
          <br></br>
          <br></br>
          <label>
            What kind of content do you create in your platform/for your
            community?*
          </label>
          <Select
            style={{ width: "384px" }}
            variant="outlined"
            value={selectedPlaftormCommunity}
            onChange={(e) => selectPlaftormCommunityHandler(e.target.value)}
          >
            {!!platformCommunityArr?.length &&
              platformCommunityArr.map(({ optionKey, value }) => (
                <MenuItem key={optionKey} value={value}>
                  {value}
                </MenuItem>
              ))}
          </Select>
          <br></br>
          <br></br>
          <label>Is there anything else that you would like to share?</label>
          <TextField
            id="platformUrl"
            type="text"
            placeholder="Enter number of followers/members/users"
            variant="outlined"
            style={{ width: "384px" }}
            onInput={(e) => setExtraInformation(e.target.value)}
            value={extraInformation}
          />
          <br></br>
          <br></br>
          <br></br>
          <h3>Agreement</h3>
          <Card>
            <CardActions disableSpacing>
              <Typography
                type="headline"
                component="h2"
                variant="background"
                grey
                color
              >
                Commission on Buy/Trade: 50 %
              </Typography>

              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <AddIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <b>Payout Details</b>
                </Typography>
                <Typography paragraph>
                  Payouts are processed when affiliate reachs total commission
                  of 100 USD.
                </Typography>
                <br></br>
                <Typography paragraph>
                  <b>Payout Currency</b>
                </Typography>
                <br></br>
                <Typography paragraph>
                  All payouts are processed in Indexx tokens only like
                  Indexx500, IndexxCrypto, IndexxUSD+ etc.
                </Typography>
                <Typography paragraph>
                  <b>Payout Schedule</b>
                </Typography>
                <Typography paragraph>
                  Payouts are processed on Monthly basis and if affiliate user
                  reachs total commsion of 100 USD then payout is automatically
                  done.Payouts are reset to zero once withdraw is processed.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <div>
              <button
                data-bn-type="button"
                onSubmit={handleSubmit}
                class="btn-form-submit button-submit"
              >
                <div>Submit</div>
              </button>
              <button
                data-bn-type="button"
                class="btn-form-reset button-cancel"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
