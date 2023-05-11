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

const FileShare = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [deviceOption, setDeviceOption] = useState([""]);

  const initialValues = {
    choosesaved: "",
    sharePath: "",
    description: "",
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const userSchema = yup.object().shape({
    choosesaved: yup.string().required("required"),
    sharePath: yup.string().required("required"),
    description: yup.string().required("required"),
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
                  <FormControl fullWidth>
                    <InputLabel>Choose Saved</InputLabel>
                    <Select
                      name="choosesaved"
                      fullWidth
                      required
                      label="Choose saved"
                      value={values.choosesaved}
                      onChange={handleChange}
                      //helperText="Please select your Device"
                      error={!!touched.choosesaved && !!errors.choosesaved}
                      helpertext={touched.choosesaved && errors.choosesaved}
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
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="File Share Path"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.sharePath}
                    name="sharePath"
                    error={!!touched.sharePath && !!errors.sharePath}
                    helperText={touched.sharePath && errors.sharePath}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    name="description"
                    error={!!touched.description && !!errors.description}
                    helperText={touched.description && errors.description}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box
              display="flex"
              justifyContent="space-evenly"
              mt="20px"
              mr="22px"
            >
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "8%", borderRadius: "5px" }}
              >
                Save
              </Button>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "8%", borderRadius: "5px" }}
              >
                New
              </Button>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "8%", borderRadius: "5px" }}
              >
                Delete
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      {/* </Box> */}
    </>
  );
};

export default FileShare;
