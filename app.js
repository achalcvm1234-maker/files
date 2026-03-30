
const SUPABASE_URL = "https://gjgspxlcwnfntuejbcsr.supabase.co";
const SUPABASE_KEY = "sb_publishable_R3_AyHsNRCM8HenZ_-fBsA_LArXKMXs";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

window.uploadFile = async function () {
  const file = document.getElementById("fileInput").files[0];

  if (!file) {
    alert("Select file!");
    return;
  }

  const { data, error } = await client.storage
    .from("files")
    .upload(file.name, file, { upsert: true });

  if (error) {
    console.error(error);
    alert("Upload failed: " + error.message);
  } else {
    alert("Upload success!");
  }
};