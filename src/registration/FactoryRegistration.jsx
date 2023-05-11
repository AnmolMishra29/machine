import {
  Box,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "./SideBar";

const FactoryRegistration = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [deviceOption, setDeviceOption] = useState([""]);

  const initialValues = {
    factoryId: 0,
    name: "",
    address: "",
  };

  //const counterRegExp = /^[0-9]+$/;
  // const macRegExp =
  //   /^(([a-fA-F0-9]{2}-){5}[a-fA-F0-9]{2}|([a-fA-F0-9]{2}:){5}[a-fA-F0-9]{2}|([0-9A-Fa-f]{4}\.){2}[0-9A-Fa-f]{4})?$/;

  const userSchema = yup.object().shape({
    factoryId: yup.number().required("required").positive().integer(),
    name: yup.string().required("required"),
    address: yup.string().required("required"),
  });

  useEffect(() => {
    const getDeviceData = async () => {
      const res = await axios.get("http://192.168.29.5:8089/device/");
      setDeviceOption(res.data);
    };
    getDeviceData();
  }, []);

  return (
    <>
      <SideBar />
      {/* <Box m="76px 20px 20px 235px"> */}
      <Formik
        //onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(data, { resetForm }) => {
          data.counterId = Number(data.counterId);
          //console.log("golmal" + data.counterId);
          console.log(data);
          let formData = new FormData();
          formData.append("counterId", data.counterId);
          formData.append("deviceId", data.deviceId);
          formData.append("macId", data.macId);
          formData.append("deviceTypeId", data.deviceTypeId);

          axios({
            method: "POST",
            url: "http://192.168.29.5:8089/device/add",
            data: data,
          })
            .then(function (res) {
              console.log(res);
              alert("Successfully signed up!");
            })
            .catch(function (res) {
              console.log(res);
            });
          resetForm({ data: "" });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box style={{ margin: "55px 20px 20px 20px" }}>
              <Grid
                container
                //rowSpacing={2}
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ margin: "50px, 5px" }}
              >
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="number"
                    label="Factory Id"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.factoryId}
                    name="factoryId"
                    error={!!touched.factoryId && !!errors.factoryId}
                    helperText={touched.factoryId && errors.factoryId}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Factory Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    error={!!touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Factory Address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    name="address"
                    error={!!touched.address && !!errors.address}
                    helperText={touched.address && errors.address}
                  />
                </Grid>

                {/* <Grid item md={12} sm={12} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Device Type</InputLabel>
                    <Select
                      name="deviceTypeId"
                      fullWidth
                      required
                      label="Device Type"
                      value={values.deviceTypeId}
                      onChange={handleChange}
                      helperText="Please select your Device"
                      error={!!touched.deviceTypeId && !!errors.deviceTypeId}
                      helpertext={touched.deviceTypeId && errors.deviceTypeId}
                    >
                      {deviceOption.map((option) => (
                        <MenuItem
                          key={option.deviceTypeId}
                          value={option.deviceTypeId}
                        >
                          {option.deviceTypeId}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid> */}
              </Grid>
            </Box>

            <Box display="flex" justifyContent="end" mt="20px" mr="22px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "25%", borderRadius: "16px" }}
              >
                Create New Device
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      {/* </Box> */}
    </>
  );
};

export default FactoryRegistration;
