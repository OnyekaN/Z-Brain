import numpy as np
import re

datasets = [ '6.7FRhcrtR-Gal4-uasKaede_6dpf_MeanImageOf12Fish',
                'Anti-5HT_6dpf_MeanImageOf40Fish',
                'Anti-Gad67_6dpf_MeanImageOf17Fish',
                'Anti-GlyR_6dpf_MeanImageOf160Fish',
                'Anti-tERK_6dpf_MeanImageOf193Fish',
                'Anti-TH_6dpf_MeanImageOf10Fish',
                'Anti-Zn1_6dpf_MeanImageOf10Fish',
                'Anti-Zn12(Hnk-1)_6dpf_MeanImageOf9Fish',
                'Anti-Znp1(Synaptotagmin2)_6dpf_MeanImageOf118Fish',
                'Anti-Zrf1(GFAP)_6dpf_MeanImageOf5Fish',
                'Anti-Zrf2_6dpf_MeanImageOf5Fish',
                'Elavl3-GCaMP5G_6dpf_MeanImageOf7Fish',
                'Elavl3-H2BRFP_6dpf_MeanImageOf10Fish',
                'EtVmat2-GFP_6dpf_MeanImageOf55Fish',
                'Gad1b-GFP_6dpf_MeanImageOf10Fish',
                'Glyt2-GFP_6dpf_MeanImageOf13Fish',
                'Hcrt-RFP_6dpf_MeanImageOf15Fish',
                'Isl1-GFP_6dpf_MeanImageOf17Fish',
                'Isl2bGal4-uasDendra',
                'Olig2-GFP_6dpf_MeanImageOf12Fish',
                'Otpb.A-Gal4-UAS-GCaMP_6-7dpf_MeanImageOf19Fish',
                'Otpb.A-Nsfb-GFP_6dpf_MeanImageOf10Fish',
                'Oxtl-GFP_6dpf_MeanImageOf68Fish',
                'Pet1-GFP_6dpf_MeanImageOf13Fish',
                'Ptf1aGal4-uasKaede_6dpf_MeanImageOf11Fish',
                'Qrfp-GFP_6dpf_MeanImageOf15Fish',
                'S1181tGal4-uasKaede_6dpf_MeanImageOf14Fish',
                'SpinalBackfills_6dpf_MeanImageOf23Fish',
                'Vglut2a-GFP_6dpf_MeanImageOf15Fish'];

for dataset_name in datasets:
	f_in = open('index.html', 'r')
	f_data = f_in.read()
	print dataset_name
	f_new_data = f_data.replace("Elavl3-H2BRFP_6dpf_MeanImageOf10Fish", dataset_name)
	f_out = open(dataset_name+".html", 'w')
	f_out.write(f_new_data)

