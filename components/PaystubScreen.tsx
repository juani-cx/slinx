import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ArrowLeft, Download, DollarSign, FileText, Calendar } from 'lucide-react';

type NavigationHandler = (screen: 'dashboard' | 'punch' | 'schedule' | 'notifications' | 'paystub' | 'timeoff') => void;

interface PaystubScreenProps {
  onNavigate: NavigationHandler;
}

export function PaystubScreen({ onNavigate }: PaystubScreenProps) {
  const currentPaystub = {
    payPeriod: 'November 26, 2023 - December 2, 2023',
    payDate: 'December 8, 2023',
    checkNumber: 'DD-2023-1245',
    grossPay: 1280.00,
    netPay: 968.32,
    regularHours: 32.0,
    overtimeHours: 0.0,
    regularRate: 17.50,
    overtimeRate: 26.25,
    taxes: {
      federal: 128.00,
      state: 64.00,
      fica: 79.36,
      medicare: 18.56
    },
    deductions: {
      healthInsurance: 45.00,
      dental: 12.00,
      retirement: 25.60,
      parking: 15.00
    },
    ytdTotals: {
      grossPay: 33280.00,
      netPay: 25156.80,
      federalTax: 3328.00,
      stateTax: 1664.00,
      fica: 2063.36,
      medicare: 482.56
    }
  };

  const recentPaystubs = [
    { period: 'Nov 12 - Nov 25, 2023', payDate: 'Dec 1, 2023', gross: 1240.00, net: 938.32 },
    { period: 'Oct 29 - Nov 11, 2023', payDate: 'Nov 17, 2023', gross: 1320.00, net: 998.40 },
    { period: 'Oct 15 - Oct 28, 2023', payDate: 'Nov 3, 2023', gross: 1280.00, net: 968.32 },
    { period: 'Oct 1 - Oct 14, 2023', payDate: 'Oct 20, 2023', gross: 1190.00, net: 900.32 },
  ];

  const handleExportPDF = () => {
    // In a real app, this would generate and download a PDF
    alert('PDF export functionality would be implemented here');
  };

  return (
    <div className="h-full bg-[#f7f9fa] overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-2"
            onClick={() => onNavigate('dashboard')}
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg text-[#212121]">Paystub</h1>
        </div>
        <Button 
          onClick={handleExportPDF}
          className="bg-[#1976d2] hover:bg-[#1565c0] text-white flex items-center gap-2 px-3 py-2 rounded-lg"
        >
          <Download size={16} />
          Export PDF
        </Button>
      </div>

      <div className="px-4 py-4">
        {/* Current Paystub Header */}
        <Card className="bg-[#1976d2] text-white rounded-xl shadow-sm mb-4">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <h2 className="text-lg mb-1">Current Paystub</h2>
              <p className="text-blue-100">{currentPaystub.payPeriod}</p>
              <p className="text-blue-100 text-sm">Pay Date: {currentPaystub.payDate}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-1">${currentPaystub.grossPay.toFixed(2)}</div>
                <div className="text-blue-100 text-sm">Gross Pay</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">${currentPaystub.netPay.toFixed(2)}</div>
                <div className="text-blue-100 text-sm">Net Pay</div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-white/10 rounded-lg">
              <div className="flex justify-between text-sm">
                <span>Check Number:</span>
                <span>{currentPaystub.checkNumber}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hours and Earnings */}
        <Card className="bg-white rounded-xl shadow-sm mb-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#212121] flex items-center gap-2">
              <Calendar size={16} />
              Hours & Earnings
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-[#f5f5f5] rounded-lg">
                <div>
                  <div className="text-sm text-[#212121]">Regular Hours</div>
                  <div className="text-xs text-[#616161]">${currentPaystub.regularRate}/hour</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[#212121]">{currentPaystub.regularHours} hrs</div>
                  <div className="text-sm text-[#4caf50]">${(currentPaystub.regularHours * currentPaystub.regularRate).toFixed(2)}</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-[#f5f5f5] rounded-lg">
                <div>
                  <div className="text-sm text-[#212121]">Overtime Hours</div>
                  <div className="text-xs text-[#616161]">${currentPaystub.overtimeRate}/hour</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[#212121]">{currentPaystub.overtimeHours} hrs</div>
                  <div className="text-sm text-[#4caf50]">${(currentPaystub.overtimeHours * currentPaystub.overtimeRate).toFixed(2)}</div>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-between items-center">
                <div className="text-sm">Total Gross Pay</div>
                <div className="text-sm text-[#4caf50]">${currentPaystub.grossPay.toFixed(2)}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Taxes */}
        <Card className="bg-white rounded-xl shadow-sm mb-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#212121] flex items-center gap-2">
              <FileText size={16} />
              Taxes
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#212121]">Federal Income Tax</span>
                <span className="text-sm text-[#f44336]">-${currentPaystub.taxes.federal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#212121]">State Income Tax</span>
                <span className="text-sm text-[#f44336]">-${currentPaystub.taxes.state.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#212121]">FICA (Social Security)</span>
                <span className="text-sm text-[#f44336]">-${currentPaystub.taxes.fica.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#212121]">Medicare</span>
                <span className="text-sm text-[#f44336]">-${currentPaystub.taxes.medicare.toFixed(2)}</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between items-center">
                <div className="text-sm">Total Taxes</div>
                <div className="text-sm text-[#f44336]">
                  -${(currentPaystub.taxes.federal + currentPaystub.taxes.state + currentPaystub.taxes.fica + currentPaystub.taxes.medicare).toFixed(2)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Deductions */}
        <Card className="bg-white rounded-xl shadow-sm mb-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#212121]">Deductions</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#212121]">Health Insurance</span>
                <span className="text-sm text-[#f44336]">-${currentPaystub.deductions.healthInsurance.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#212121]">Dental Insurance</span>
                <span className="text-sm text-[#f44336]">-${currentPaystub.deductions.dental.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#212121]">401(k) Retirement</span>
                <span className="text-sm text-[#f44336]">-${currentPaystub.deductions.retirement.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#212121]">Parking</span>
                <span className="text-sm text-[#f44336]">-${currentPaystub.deductions.parking.toFixed(2)}</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between items-center">
                <div className="text-sm">Total Deductions</div>
                <div className="text-sm text-[#f44336]">
                  -${(currentPaystub.deductions.healthInsurance + currentPaystub.deductions.dental + currentPaystub.deductions.retirement + currentPaystub.deductions.parking).toFixed(2)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Net Pay Summary */}
        <Card className="bg-[#4caf50] text-white rounded-xl shadow-sm mb-6">
          <CardContent className="p-6 text-center">
            <div className="text-lg mb-2">Net Pay</div>
            <div className="text-3xl">${currentPaystub.netPay.toFixed(2)}</div>
            <div className="text-green-100 text-sm mt-2">Deposited to your account</div>
          </CardContent>
        </Card>

        {/* YTD Summary */}
        <Card className="bg-white rounded-xl shadow-sm mb-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#212121]">Year-to-Date Summary</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-[#616161]">Gross Pay</span>
                  <span className="text-sm text-[#212121]">${currentPaystub.ytdTotals.grossPay.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#616161]">Net Pay</span>
                  <span className="text-sm text-[#212121]">${currentPaystub.ytdTotals.netPay.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#616161]">Federal Tax</span>
                  <span className="text-sm text-[#212121]">${currentPaystub.ytdTotals.federalTax.toLocaleString()}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-[#616161]">State Tax</span>
                  <span className="text-sm text-[#212121]">${currentPaystub.ytdTotals.stateTax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#616161]">FICA</span>
                  <span className="text-sm text-[#212121]">${currentPaystub.ytdTotals.fica.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#616161]">Medicare</span>
                  <span className="text-sm text-[#212121]">${currentPaystub.ytdTotals.medicare.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Paystubs */}
        <Card className="bg-white rounded-xl shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#212121] flex items-center gap-2">
              <DollarSign size={16} />
              Recent Paystubs
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {recentPaystubs.map((paystub, index) => (
                <div key={index} className="flex justify-between items-center p-3 border border-[#e0e0e0] rounded-lg">
                  <div>
                    <div className="text-sm text-[#212121]">{paystub.period}</div>
                    <div className="text-xs text-[#616161]">Paid: {paystub.payDate}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#212121]">${paystub.net.toFixed(2)} net</div>
                    <div className="text-xs text-[#616161]">${paystub.gross.toFixed(2)} gross</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}