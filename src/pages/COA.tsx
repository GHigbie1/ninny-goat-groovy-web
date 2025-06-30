
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Download, Calendar, CheckCircle } from 'lucide-react';

const COA = () => {
  const coaDocuments = [
    {
      id: 1,
      productName: "Sunset Sherbet",
      batchNumber: "SS-2024-001",
      testDate: "2024-01-15",
      thc: "22.3%",
      cbd: "0.8%",
      status: "Passed",
      downloadUrl: "#"
    },
    {
      id: 2,
      productName: "Blue Dream",
      batchNumber: "BD-2024-002", 
      testDate: "2024-01-12",
      thc: "18.7%",
      cbd: "1.2%",
      status: "Passed",
      downloadUrl: "#"
    },
    {
      id: 3,
      productName: "OG Kush",
      batchNumber: "OG-2024-003",
      testDate: "2024-01-10",
      thc: "24.1%",
      cbd: "0.5%",
      status: "Passed",
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-ninny-cashmere">
      <Header />
      
      <main className="pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-genty text-ninny-raspberry mb-6">
              Certificates of Analysis
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-black">
              Transparency is at the heart of everything we do. Every product we sell comes with 
              detailed lab testing results to ensure quality, safety, and potency. View and download 
              our COAs below.
            </p>
          </div>

          {/* Info Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <FileText className="h-12 w-12 text-ninny-water mx-auto mb-4" />
              <h3 className="font-genty text-xl text-ninny-raspberry mb-2">Lab Tested</h3>
              <p className="text-black">All products undergo rigorous third-party testing for potency and contaminants.</p>
            </div>
            
            <div className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-ninny-water mx-auto mb-4" />
              <h3 className="font-genty text-xl text-ninny-raspberry mb-2">Quality Assured</h3>
              <p className="text-black">Our testing ensures products are free from pesticides, heavy metals, and residual solvents.</p>
            </div>
            
            <div className="text-center p-6">
              <Download className="h-12 w-12 text-ninny-water mx-auto mb-4" />
              <h3 className="font-genty text-xl text-ninny-raspberry mb-2">Accessible Results</h3>
              <p className="text-black">Download and review detailed test results for complete transparency.</p>
            </div>
          </div>

          {/* COA Documents */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="font-genty text-2xl text-ninny-raspberry mb-8 text-center">
              Recent Test Results
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-ninny-water/20">
                    <th className="text-left py-4 px-4 font-genty text-ninny-raspberry">Product</th>
                    <th className="text-left py-4 px-4 font-genty text-ninny-raspberry">Batch #</th>
                    <th className="text-left py-4 px-4 font-genty text-ninny-raspberry">Test Date</th>
                    <th className="text-left py-4 px-4 font-genty text-ninny-raspberry">THC</th>
                    <th className="text-left py-4 px-4 font-genty text-ninny-raspberry">CBD</th>
                    <th className="text-left py-4 px-4 font-genty text-ninny-raspberry">Status</th>
                    <th className="text-left py-4 px-4 font-genty text-ninny-raspberry">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {coaDocuments.map((doc) => (
                    <tr key={doc.id} className="border-b border-gray-200 hover:bg-ninny-cashmere/50">
                      <td className="py-4 px-4 font-medium text-black">{doc.productName}</td>
                      <td className="py-4 px-4 text-black">{doc.batchNumber}</td>
                      <td className="py-4 px-4 text-black">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-ninny-water" />
                          {doc.testDate}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-black font-medium">{doc.thc}</td>
                      <td className="py-4 px-4 text-black font-medium">{doc.cbd}</td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3" />
                          {doc.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-ninny-water text-white rounded-lg hover:bg-ninny-water/90 transition-colors">
                          <Download className="h-4 w-4" />
                          PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-black mb-4">
              Looking for a specific batch? Can't find what you need?
            </p>
            <a href="#contact" className="retro-button">
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default COA;
