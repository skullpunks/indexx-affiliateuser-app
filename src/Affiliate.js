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
// import LogoIcon from "./indexx_affiliate_logo.png";
import indexx_logo from "./assets/indexText.svg";
import indexGreyLogo from "./assets/indexGreyLogo.svg";
import indexIcon from "./assets/indexIcon.svg";
import timezones from "./timezones";
import * as axios from "axios";
import Footer from "../src/components/Footer.component";
// import { Link } from "react-router-dom";
// import Footer from "../src/components/Footer.component";
// import PasswordField from 'material-ui-password-field'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <AddIcon {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(135deg)",
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
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }
    if (email !== emailConfirm) {
      alert("Emails do not match");
    }
    if (email && password && userName && confirmPassword && emailConfirm && firstName && lastName && phoneNumber && selectedCountry && selectedTimeZone && selectedSocialMedia && selectedPlaftormCommunity && socialMediaUsername && affiliateType && companyURL && streetAddress1 && city && zipCode) {
      // ..code to submit form to backend here...
      const response = await axios.post(`https://c468-49-207-204-218.ngrok.io/api/v1/addaffiliateuser`, {
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
      if(response.status === 200 && response.data.message === "Email already exist!") {
        alert("Email already exist! Please sign in or use another email");
      }
      else if (response.status === 200) {
        console.log("success");
        alert("Registration success. We are reviewing your application. You receive an email when your application is approved");
      } 
       else {
        alert("Something went error! Please contact us support@indexx.ai");
      }
    } else {
      alert("Please fill all the fields");
    }
  }

  return (
    <div>
      <div className="main-header">
        <img src={indexx_logo} alt="indexx logo" height="35" />
        <h1 className="logo__text ">AFFILIATE PROGRAM</h1>
      </div>
      <div className="banner flex-column">
        <div className="d-flex mt-2 ">
          <img src={indexIcon} alt="index icon" />
          <img src={indexGreyLogo} className="p-lg-2" alt="index grey logo" />
        </div>
        <h1 className="banner__heading m-3 mb-4">Affiliate Program</h1>
        <h1> <strong>50% Commission </strong></h1>
        <div className="banner__card card border-primary">
          <p className="banner__message card-body m-0"><span> Note: This commision applies once your referral completes a purchase of any ICO tokens (Indexx500, IndexxCrypto, IndexxUSD+). All the commission earned are payout when total tokens is reached to 100 for ICO token. </span></p>
        </div>
      </div>
      <div className="max_width center text-center flex-column m-aut0">
        <h5>Already have an account? <a href="https://login.affiliate.indexx.ai/" to="" className="text-primary">Log In</a> </h5>
        <hr />
        <h5>Sign up with your social network account</h5>
      </div>
      {/* <div className="center">
        <h3 className="center">YOUR INFORMATION</h3>

      </div> */}
      <div className="form-center">
        <form className="form-inline" onSubmit={handleSubmit}  autoComplete="off">
          <br></br>
          <h3>YOUR INFORMATION</h3>
          <br></br>
          <div className="d-flex dd">
            <label>Full Name*</label>
            <TextField
              id="firstName"
              placeholder="First Name"
              variant="outlined"
              value={firstName}
              style={{ width: "240px" }}
              onInput={(e) => setFirstName(e.target.value)}
              required
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              id="lastName"
              placeholder="Last Name"
              variant="outlined"
              value={lastName}
              style={{ width: "240px" }}
              onInput={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>Email*</label>
            <TextField
              id="email"
              placeholder="you@yourdomain.com"
              variant="outlined"
              style={{ width: "500px" }}
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>Email(Confirm)*</label>
            <TextField
              id="email"
              placeholder="Email(Confirm)"
              variant="outlined"
              style={{ width: "500px" }}
              value={emailConfirm}
              onInput={(e) => setConfirmEmail(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>Username*</label>
            <TextField
              id="username"
              placeholder="Username"
              variant="outlined"
              style={{ width: "500px" }}
              value={userName}
              onInput={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>Password*</label>
            <TextField
              id="password"
              placeholder="Password"
              variant="outlined"
              style={{ width: "500px" }}
              value={password}
              type="password"
              onInput={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>Password(Confirm)*</label>
            <TextField
              id="passwordconfirm"
              placeholder="Password(Confirm)"
              variant="outlined"
              style={{ width: "500px" }}
              type="password"
              value={confirmPassword}
              onInput={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>
          <br></br> <br></br> <br></br>
          <h3>COMPANY/INDIVIDUAL INFORMATION</h3>
          <br></br>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={isCompany}
              onChange={(e) => selectIsCompanyHandler(e.target.value)}
              required
            >
              <label>Are you a company?*</label>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" style={{ width: 140 }} />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <br></br>
          <br></br>
          <div className="d-flex dd">
            <label>Account Display Name*</label>
            <TextField
              id="displayName"
              placeholder="Account Display Name"
              variant="outlined"
              style={{ width: "500px" }}
              value={displayName}
              onInput={(e) => setDisplayName(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>Company Website*</label>
            <TextField
              id="displayName"
              placeholder="www.yourdomain.com"
              variant="outlined"
              style={{ width: "500px" }}
              value={companyURL}
              onInput={(e) => setCompanyURL(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>Country*</label>{" "}
            <Select
              style={{ width: "496px" }}
              value={selectedCountry}
              variant="outlined"
              onChange={(e) => selectCountryHandler(e.target.value)}
              required
            >
              {!!countryArr?.length &&
                countryArr.map(({ label, value }) => (
                  <MenuItem key={value} value={label}>
                    {label}
                  </MenuItem>
                ))}
            </Select>
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>Street Address 1*</label>
            <TextField
              id="streetaddress1"
              placeholder="Street Address 1"
              variant="outlined"
              style={{ width: "500px" }}
              value={streetAddress1}
              onInput={(e) => setStreetAddress1(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>Street Address 2</label>
            <TextField
              id="streetaddress2"
              placeholder="Street Address 2"
              variant="outlined"
              style={{ width: "500px" }}
              value={streetAddress2}
              onInput={(e) => setStreetAddress2(e.target.value)}
            />
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>City*, Zip*</label>
            <TextField
              id="city"
              placeholder="City"
              variant="outlined"
              style={{ width: "240px" }}
              value={city}
              onInput={(e) => setCity(e.target.value)}
              required
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              id="zip"
              placeholder="Zip"
              variant="outlined"
              style={{ width: "240px" }}
              value={zipCode}
              onInput={(e) => setZipCode(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>Phone Number*</label>
            <TextField
              id="phone"
              placeholder="Enter the phone number"
              variant="outlined"
              style={{ width: "500px" }}
              value={phoneNumber}
              onInput={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>Timezone*</label>{" "}
            <Select
              style={{ width: "496px" }}
              value={selectedTimeZone}
              variant="outlined"
              onChange={(e) => selectTimeZoneHandler(e.target.value)}
              required
            >
              {!!timezones?.length &&
                timezones.map(({ text, value }) => (
                  <MenuItem key={text} value={text}>
                    {text}
                  </MenuItem>
                ))}
            </Select>
          </div>
          <h3 className="mb-3 mt-5">PROMOTIONAL INFORMATION</h3>
          <div className="d-flex dd">
            <label>How do we contact you? (through Social Media)*</label>
            <Select
              style={{ width: "500px" }}
              value={selectedSocialMedia}
              variant="outlined"
              onChange={(e) => selectSocialMediaHandler(e.target.value)}
              required
            >
              {!!socialMediaArr?.length &&
                socialMediaArr.map(({ optionKey, value }) => (
                  <MenuItem key={optionKey} value={value}>
                    {value}
                  </MenuItem>
                ))}
            </Select>
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>Username (to contact you on Social Media)*</label>
            <TextField
              id="socialmediaUsername"
              placeholder="Enter username"
              variant="outlined"
              style={{ width: "500px" }}
              value={socialMediaUsername}
              onInput={(e) => setsocialMediaUsername(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>Select your Affiliate type*</label>{" "}
            <Select
              style={{ width: "496px" }}
              value={affiliateType}
              variant="outlined"
              onChange={(e) => setAffiliateType(e.target.value)}
              required
            >
              {!!affiliateTypeArr?.length &&
                affiliateTypeArr.map(({ optionKey, value }) => (
                  <MenuItem key={value} value={value}>
                    {optionKey}
                  </MenuItem>
                ))}
            </Select>
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>
              What kind of content do you create in your platform/for your
              community?*
            </label>
            <Select
              style={{ width: "500px" }}
              variant="outlined"
              value={selectedPlaftormCommunity}
              onChange={(e) => selectPlaftormCommunityHandler(e.target.value)}
              required
            >
              {!!platformCommunityArr?.length &&
                platformCommunityArr.map(({ optionKey, value }) => (
                  <MenuItem key={optionKey} value={value}>
                    {value}
                  </MenuItem>
                ))}
            </Select>
          </div>
          <br></br>
          <div className="d-flex dd">
            <label>Is there anything else that you would like to share?</label>
            <TextField
              id="platformUrl"
              type="text"
              placeholder="Enter number of followers/members/users"
              variant="outlined"
              style={{ width: "500px" }}
              onInput={(e) => setExtraInformation(e.target.value)}
              value={extraInformation}
            />
          </div>
          <br></br>
          <h3 className="mb-3 mt-5">AGREEMENTS</h3>
          <Card style={{ boxShadow: "none" }}>
            <CardActions disableSpacing
              style={{ backgroundColor: "#9F9F9F", boxShadow: "none" }}>
              <Typography
                type="headline"
                component="h4"
                variant="background"
                grey
                color='#fff'
                className="p-2"
              >
                Commission on Buy/Trade: 50 %
              </Typography>

              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                className="cursor-pointer"
                style={{ color: "#fff", fontSize: "2.5rem" }}
              >
                <AddIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <h3>Payout Details</h3>
                <Typography paragraph>
                  Payouts are processed when affiliate reachs total commission
                  of 100 Tokens any one of the Indexx Token.
                </Typography>
                <br></br>
                <h3 className="mt-4">Payout Currency</h3>
                <Typography paragraph>
                  All payouts are processed in Indexx tokens only like
                  Indexx500(IN500), IndexxCrypto(INXC), IndexxUSD+(IUSD+) etc.
                </Typography>
                <h3 className="mt-4">Payout Schedule</h3>
                <Typography paragraph>
                  Payouts are processed on request basis and if affiliate user
                  reachs total commsion of 100  any one of the Indexx Token then payout is automatically
                  done.Payouts are reset to zero once withdraw is processed.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <br></br>
          <div>
            <div class="d-grid gap-2">
              <button
                data-bn-type="button"
                onSubmit={handleSubmit}
                className="btn-form-submit button-submit btn btn-primary btn-lg mt-3 mb-5"
              >
                <div>Submit</div>
              </button>
            </div>
          </div>
        </form>
      </div >
      <Footer />
    </div >
  );
}
