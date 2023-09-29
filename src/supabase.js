import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://hcrwoyehctdihciwkzin.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjcndveWVoY3RkaWhjaXdremluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1Njg1NDYsImV4cCI6MjAxMTE0NDU0Nn0.jp5SoQPFKN5_xEnQmf0OiTSLG4y4jin9v_s04GoLkTg')

export { supabase }