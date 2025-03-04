import '@style/globals.css'

import Head from 'next/head'
import Header from '@comp/header'
import Footer from '@comp/footer'
import { Auth0Provider } from '@auth0/auth0-react'

export default function MyApp({ Component, pageProps }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Çalgan Aygün',
    description:
      'DevOps Lead at FinalCheck, specializing in individual verification/background check solutions. Former backend and cloud engineer at QuarPay, with expertise in serverless computing, OSINT, document AI services, and high-scale scraping.',
    image: 'https://calganaygun.com/static/notes/speaker_profile_square.jpeg',
    url: 'https://calgan.dev',
    sameAs: [
      'https://twitter.com/calganaygun',
      'https://github.com/calganaygun',
      'https://linkedin.com/in/calganaygun',
      'https://g.dev/calgan',
      'https://dev.to/@calganaygun',
      'https://medium.com/@calganaygun',
      'https://calganaygun.com',
      'https://calgan.dev'
    ],
    email: 'hey@calgan.dev',
    jobTitle: 'Software Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'FinalCheck',
      url: 'https://finalcheck.net'
    },
    birthPlace: { '@type': 'Place', name: 'Ankara, Turkey' },
    nationality: { '@type': 'Country', name: 'Turkey' },
    knowsAbout: [
      'DevOps',
      'Google Cloud Platform',
      'Kubernetes',
      'Terraform',
      'Serverless Architectures',
      'Cloud Security',
      'CI/CD Pipelines',
      'OSINT',
      'Document AI Services',
      'Face Recognition',
      'High-Scale Scraping',
      'Backend Development',
      'Networking',
      'Linux',
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'Go',
      'Python',
      'Java'
    ],
    knowsLanguage: ['en', 'tr'],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Hacettepe University',
        url: 'https://hacettepe.edu.tr/english',
        sameAs: 'https://hacettepe.edu.tr/english'
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Private Denge Anatolian High School',
        url: 'https://www.dengeegitim.k12.tr/',
        sameAs: 'https://www.dengeegitim.k12.tr/'
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Ankara Gazi Anatolian High School',
        url: 'https://gazianadolu.meb.k12.tr/',
        sameAs: 'https://gazianadolu.meb.k12.tr/'
      }
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'GDG Ankara',
        url: 'https://gdg.community.dev/gdg-ankara/'
      },
      {
        '@type': 'Organization',
        name: 'GDG Cloud Ankara',
        url: 'https://gdg.community.dev/gdg-cloud-ankara/'
      },
      {
        '@type': 'Organization',
        name: 'Google Cloud Innovators Champions',
        url: 'https://cloud.google.com/innovators/champions/directory'
      }
    ],
    performerIn: [
      {
        '@type': 'Event',
        name: 'Cloud Fundementals',
        startDate: '2024-11-28',
        endDate: '2024-11-28',
        location: 'Ankara, Turkey',
        organizer: {
          '@type': 'Organization',
          name: 'Ostim Technical University'
        },
        about: 'Google Cloud Platform - Essential Services Overview'
      },
      {
        '@type': 'Event',
        name: 'Cloud Fundementals Ankara - 2',
        startDate: '2024-09-15',
        endDate: '2024-09-15',
        location: 'Ankara, Turkey',
        organizer: { '@type': 'Organization', name: 'GDG Cloud Ankara' },
        about: 'Google Cloud Platform - Essential Services Overview'
      },
      {
        '@type': 'Event',
        name: 'Build With AI Ankara',
        startDate: '2024-06-30',
        endDate: '2024-06-30',
        location: 'Ankara, Turkey',
        organizer: { '@type': 'Organization', name: 'GDG Cloud Ankara' },
        about: 'Production Ready AI Apps with Firebase Genkit'
      },
      {
        '@type': 'Event',
        name: 'DevFest Ankara 2023',
        startDate: '2023-12-17',
        endDate: '2023-12-17',
        location: 'Ankara, Turkey',
        organizer: { '@type': 'Organization', name: 'GDG Ankara' },
        about: 'Unlocking App Potential with Cloud & LLMs'
      },
      {
        '@type': 'Event',
        name: 'DevFest Samsun 2023',
        startDate: '2023-11-06',
        endDate: '2023-11-06',
        location: 'Samsun, Turkey',
        organizer: { '@type': 'Organization', name: 'GDG Samsun' },
        about: 'Unlocking App Potential with Cloud & LLMs'
      },
      {
        '@type': 'Event',
        name: 'DevFest Izmir 2022',
        startDate: '2022-12-17',
        endDate: '2023-12-17',
        location: 'İzmir, Turkey',
        organizer: { '@type': 'Organization', name: 'GDG İzmir' },
        about: 'Building event-driven applicaitons with Cloud Run: Eventarc'
      },
      {
        '@type': 'Event',
        name: 'Monthly Events',
        startDate: '2023-11-09',
        endDate: '2023-11-09',
        location: 'Ankara, Turkey',
        organizer: { '@type': 'Organization', name: 'Cloud Türkiye' },
        about: 'Building event-driven applicaitons with Cloud Run: Eventarc'
      }
    ]
  }

  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      redirectUri={process.env.API_URL}
    >
      <Head>
        <title>Çalgan Aygün</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        ></script>
      </Head>

      <Header />
      <main className="py-14">
        <Component {...pageProps} />
      </main>
      <Footer />
    </Auth0Provider>
  )
}
