import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://caltnspokiidtzfykyqf.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhbHRuc3Bva2lpZHR6ZnlreXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NjE1NTUsImV4cCI6MjAyOTEzNzU1NX0.N3fu378hR-YBFS7M0RJRz4uEaIGrd09DLCLV5MpD3dU"


const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;