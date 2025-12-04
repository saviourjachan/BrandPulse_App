import { HistoryItem } from './types';

export const MOCK_HISTORY: HistoryItem[] = [
  {
    id: '1',
    brandName: 'Coca-Cola',
    timestamp: 'Dec 15, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtEefvYpkUl2fyx46X6PYbwDXahQdeZtbkRA8u_QKpOazZxANfTf6ODZGr-G35v-4Glqd7_Xe8n8_Ybj1JZGszjdYX_F8A-du75yDZ-uEQ5CgaCHiQa3AstHj_usBKw-EQuuaNaQJQ0_cZzKWPXS8GsS-WNyGhBjKh9NfIiSwnBzwK2ntpmGDusypO6zdTiKuQ9TKmmmTG00rpRlW3hPDk7vxYm4kElxlRzNiwinI9O0DNOEfb8fKm6mtZvOkU3FSvQd9p5cbGVYM',
    scores: { consistency: 85, recognition: 90, sentiment: 80, reach: 85 },
    visualIdentity: { colors: ['#F40009', '#FFFFFF'], font: 'Spencerian' },
    personality: { tags: ['Classic', 'Joyful', 'Universal'] },
    recommendations: { critical: '', quickWins: '', strategic: '' }
  },
  {
    id: '2',
    brandName: 'Nike',
    timestamp: 'Dec 14, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm3AtOa64K9G0_COxzxPBkxL6D6fpHsk3QfcemqgyUZS1U_kDYpuhUhLh459U90J7XYjZqsaZ6jZAtcbGo9KSnP177pdVn_xhNGQI5bX21kXM25EPxnXsuKDJQH5Y4neQVqgEUcLS6p0Mk2hR4ZPCsl0xhE7BvnVHJ7brjeqSDQ_dBCRdq5Zcgie6yYtVsRflFN5R1SKUEHI_vMWC5LXvCVZfE5orDb-unETHEawia9AqGH1klSyGPH5rvUXRkus3WnkHJzEMbSco',
    scores: { consistency: 72, recognition: 85, sentiment: 60, reach: 70 },
    visualIdentity: { colors: ['#000000', '#FFFFFF'], font: 'Futura' },
    personality: { tags: ['Athletic', 'Inspiring', 'Bold'] },
    recommendations: { critical: '', quickWins: '', strategic: '' }
  },
  {
    id: '3',
    brandName: 'IKEA',
    timestamp: 'Dec 12, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUjJg-R-B7JHFgCg_3d_R251cvufEZ_eh2EK9YCyYEgIVX4KcxQ1Iq4slrOVykIaMGDCSNflTElVS5o3B8vwR6Zm09CnM2SYliplCWv8JhGsGGL-2OdNhTzOnkQ96FhQ1CPRs8ittbAid686SiQDjvGb-7Kaojd3h-BUgZy-JjqYg3e2cSY_vbTWEm9zwtU7E7aoHqw1LzT2lcaWLHf94c2E2Bzwc5iPKg4Ah7jPi5upqg7d4Cint3pMqS6sgOQapnZRRfPq2kS4A',
    scores: { consistency: 91, recognition: 95, sentiment: 88, reach: 90 },
    visualIdentity: { colors: ['#0051BA', '#FFDA1A'], font: 'Noto Sans' },
    personality: { tags: ['Functional', 'Affordable', 'Friendly'] },
    recommendations: { critical: '', quickWins: '', strategic: '' }
  },
  {
    id: '4',
    brandName: 'Untitled Analysis',
    timestamp: 'Dec 11, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEw2mR_94KTn1DtiS7Yq46oe_m5z1B91YkVrRYzLM__oMUNyRHWRbAJxjtRsSjsF5EgAu4rkJTj2i8ceyxnEIe6oLRHMwKoiaoLASeiT0vlQCdWj9DJnarJf95LVdY9VJw0zaN6sOeVb8GEF2-TCPd0ySQHVL18Ngu9OlwuEXZzr3hJH5Kd2vzANkJ34VBYG-que4oHjCMbOBfNHTGJzdumn0zEidnawKLD4YXOQjMVxBu_2zO4dQBWxYjfA1u_7fhU7Bw3mj7Tn0',
    scores: { consistency: 65, recognition: 60, sentiment: 70, reach: 65 },
    visualIdentity: { colors: ['#000000'], font: 'Unknown' },
    personality: { tags: ['Minimal', 'Tech'] },
    recommendations: { critical: '', quickWins: '', strategic: '' }
  },
  {
    id: '5',
    brandName: 'Starbucks',
    timestamp: 'Dec 10, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK6UraPwpuz0HsdY4B0d8mK1VjNQT7w4OD_MOsHV3SRTnCfiS37l0EpiMAxyoVY3ZHSkaRbynXMJMa5808Bvf3YR4Z-RKlLwZcZizPtMjxBalZ1_UhpjPWLpmVLjtp4bCB5v8_N7jDhDxcj_OkMuj0GyurJk5uyPdrgTqA487PIWKq5ITxKcQa941wxMciy6P_yCMr18o41EWDb3hBR_P5PpUvCiEAQJIf-wFAm9JZaISsyI734OAWTaIa_TwQm_ZRXHT-VuG0tnc',
    scores: { consistency: 48, recognition: 80, sentiment: 40, reach: 90 },
    visualIdentity: { colors: ['#00704A', '#FFFFFF'], font: 'Sodo Sans' },
    personality: { tags: ['Community', 'Coffee', 'Green'] },
    recommendations: { critical: '', quickWins: '', strategic: '' }
  },
  {
    id: '6',
    brandName: 'Mercedes-Benz',
    timestamp: 'Dec 9, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe72s-j_gIDm0uKhdswz5-DzU-oJnPSvfynfiEAUBf7CFKFotCAak22XfUyi71fQmPYn83ya9o44Yrie5GwyB1wh08m95wCyoAqaxKU2ZCWldl2e2IEvAKGQoRkMB6_Ou1Ognjihjmud4dbvZkjnUt8hEFec1lEzkohwx68Qfn_Q4fcXbEPK2uzI5bnMveuUyMPQhY8yz1SC_YxTk7GUleageTmCIzkgoYV05R3UD219XALzBuFqPnnPXYRdxAjdchHx_ye4zjay4',
    scores: { consistency: 88, recognition: 95, sentiment: 90, reach: 92 },
    visualIdentity: { colors: ['#C0C0C0', '#000000'], font: 'Corporate A' },
    personality: { tags: ['Luxury', 'Engineering', 'Prestige'] },
    recommendations: { critical: '', quickWins: '', strategic: '' }
  }
];

export const INITIAL_ANALYSIS_STATE: HistoryItem = {
    id: 'temp',
    brandName: 'Detected Brand',
    imageUrl: '',
    scores: { consistency: 0, recognition: 0, sentiment: 0, reach: 0 },
    visualIdentity: { colors: [], font: 'Unknown' },
    personality: { tags: [] },
    recommendations: { critical: '', quickWins: '', strategic: '' }
};