import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

interface PdfReportProps {
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    gender: string;
    location: string;
  };
  recommendations: {
    diet: string[];
    lifestyle: string[];
    exercise: string[];
    herbs: string[];
  };
}

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    color: '#166534',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: '#166534',
    marginBottom: 15,
  },
  doshaTitle: {
    fontSize: 18,
    color: '#166534',
    marginBottom: 10,
  },
  doshaDescription: {
    fontSize: 12,
    color: '#374151',
    marginBottom: 20,
    lineHeight: 1.6,
  },
  section: {
    marginBottom: 20,
  },
  recommendationContainer: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    border: '1 solid #E5E7EB',
  },
  recommendationTitle: {
    fontSize: 16,
    color: '#166534',
    marginBottom: 15,
  },
  recommendationItem: {
    fontSize: 12,
    color: '#374151',
    marginBottom: 8,
    lineHeight: 1.4,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 10,
    paddingTop: 10,
    borderTop: '1 solid #E5E7EB',
  },
});

const PdfDocument = ({ userInfo, recommendations }: PdfReportProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Your Dosha Report based on the information shared:</Text>
        <Text style={styles.doshaTitle}>Your Prakriti: Pitta-Vata Prakriti (Fire & Water + Air & Ether)</Text>
        <Text style={styles.doshaDescription}>
          A Pitta-Vata person possesses sharp intelligence, intense ambition, and quick adaptability. Pitta's fire fuels their drive and leadership skills, while Vata's air gives them creativity and curiosity. This makes them visionary thinkers, problem-solvers, and natural innovators. They excel in fast-paced environments but may become impatient, restless, or prone to burnout. Their competitive streak (Pitta) and tendency to overthink (Vata) can lead to stress, anxiety, or sleep disturbances when out of balance.
        </Text>
      </View>

      {/* How to Maintain Balance */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>How to Maintain Balance:</Text>
        <Text style={styles.recommendationItem}>1. Prioritize Rest & Recovery – A structured daily routine with consistent sleep and relaxation prevents mental exhaustion.</Text>
        <Text style={styles.recommendationItem}>2. Choose Cooling & Nourishing Foods – Favor mild, hydrating, and grounding meals (like ghee, coconut, and whole grains) to pacify excess heat and movement.</Text>
        <Text style={styles.recommendationItem}>3. Mindful Exercise – Activities like swimming, yoga, or Tai Chi help balance their fiery intensity with calmness.</Text>
        <Text style={styles.recommendationItem}>4. Control Overworking & Overthinking – Setting healthy boundaries with work and engaging in grounding practices like deep breathing can help.</Text>
        <Text style={styles.recommendationItem}>5. Embrace Playfulness & Joy – Laughter, creative hobbies, and social bonding prevent their strong drive from becoming overwhelming.</Text>
      </View>

      {/* Detailed Recommendations */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Detailed Lifestyle Recommendations</Text>
        
        {/* Dietary Guidelines */}
        <View style={styles.recommendationContainer}>
          <Text style={styles.recommendationTitle}>Dietary Guidelines</Text>
          {recommendations.diet.map((item, index) => (
            <Text key={index} style={styles.recommendationItem}>• {item}</Text>
          ))}
        </View>

        {/* Lifestyle Practices */}
        <View style={styles.recommendationContainer}>
          <Text style={styles.recommendationTitle}>Lifestyle Practices</Text>
          {recommendations.lifestyle.map((item, index) => (
            <Text key={index} style={styles.recommendationItem}>• {item}</Text>
          ))}
        </View>

        {/* Exercise Recommendations */}
        <View style={styles.recommendationContainer}>
          <Text style={styles.recommendationTitle}>Exercise Recommendations</Text>
          {recommendations.exercise.map((item, index) => (
            <Text key={index} style={styles.recommendationItem}>• {item}</Text>
          ))}
        </View>

        {/* Beneficial Herbs */}
        <View style={styles.recommendationContainer}>
          <Text style={styles.recommendationTitle}>Beneficial Herbs</Text>
          {recommendations.herbs.map((item, index) => (
            <Text key={index} style={styles.recommendationItem}>• {item}</Text>
          ))}
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        © 2024 Prakriti Assessment. This report is based on traditional Ayurvedic principles.
      </Text>
    </Page>
  </Document>
);

export const PdfDownloadButton = ({ userInfo, recommendations }: PdfReportProps) => (
  <PDFDownloadLink
    document={<PdfDocument userInfo={userInfo} recommendations={recommendations} />}
    fileName={`prakriti-report-${userInfo.firstName.toLowerCase()}-${userInfo.lastName.toLowerCase()}.pdf`}
  >
    {({ blob, url, loading, error }) => 
      loading ? 'Generating PDF...' : 'Download PDF Report'
    }
  </PDFDownloadLink>
); 