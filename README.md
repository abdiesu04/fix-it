# Fix-IT: AI-Powered PDF Learning Assistant

Fix-IT is an innovative web application that transforms your learning experience by combining PDF document analysis with AI-powered quizzes and explanations. Built with Next.js and powered by advanced AI technology, Fix-IT helps students and professionals better understand and retain information from their study materials.

## 🎥 Demo

<div align="center">
  <img src="Untitledvideo-MadewithClipchamp-ezgif.com-video-to-gif-converter.gif" alt="Fix-IT Demo" width="100%">
</div>

## ✨ Features

- **PDF Upload & Analysis**: Upload your study materials in PDF format
- **AI-Generated Quizzes**: Get personalized quizzes based on your documents
- **Smart Explanations**: Receive detailed explanations for each answer
- **Content Breakdown**: View comprehensive topic summaries
- **Progress Tracking**: Monitor your learning progress
- **Responsive Design**: Seamless experience across all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Fix-IT.git
cd Fix-IT
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add:
```env
NEXT_PUBLIC_API_BASE_URL=your_api_url
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **PDF Processing**: PDF.js
- **AI Integration**: Google Gemini AI
- **Authentication**: JWT

## 📁 Project Structure

```
Fix-IT/
├── app/
│   ├── components/
│   ├── lib/
│   ├── quiz/
│   └── read/
├── public/
│   ├── assets/
│   └── pdf-worker/
├── styles/
└── types/
```

## 🔒 Security

- PDF files are processed securely
- User authentication required for uploads
- API rate limiting implemented
- Secure content storage

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙏 Acknowledgments

- PDF.js for PDF rendering capabilities
- Google Gemini AI for content analysis
- Next.js team for the amazing framework
- All contributors who have helped shape Fix-IT

