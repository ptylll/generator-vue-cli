const createMix = {
  methods: {
    beforeUpload(file) {
      // const isJPG = file.type === "image/jpeg";
      // if (!isJPG) {
      //   this.$message.error("You can only upload JPG file!");
      // }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
export default createMix;
