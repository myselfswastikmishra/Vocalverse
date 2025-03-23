
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bitcoin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const cryptoOptions = [
  { name: "Bitcoin", symbol: "BTC", address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" },
  { name: "Ethereum", symbol: "ETH", address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F" },
  { name: "Litecoin", symbol: "LTC", address: "ltc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" },
];

export function CryptoDonation() {
  const [amount, setAmount] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0].symbol);
  const { toast } = useToast();

  const handleCopy = () => {
    const address = cryptoOptions.find(c => c.symbol === selectedCrypto)?.address;
    if (address) {
      navigator.clipboard.writeText(address);
      toast({
        title: "Address copied!",
        description: "Wallet address copied to clipboard",
      });
    }
  };

  const handleDonate = () => {
    if (!amount) {
      toast({
        variant: "destructive",
        title: "Amount required",
        description: "Please enter a donation amount",
      });
      return;
    }

    toast({
      title: "Thank you for your support!",
      description: `Your donation of ${amount} ${selectedCrypto} will help us maintain and improve the platform.`,
    });
  };

  return (
    <div className="w-full max-w-md p-6 bg-card border rounded-xl shadow-sm">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col items-center space-y-3 text-center">
          <div className="p-3 rounded-full bg-primary/10">
            <Bitcoin className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-medium">Support with Crypto</h3>
          <p className="text-muted-foreground text-sm">
            Your donations help us maintain the platform and keep content free for everyone
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="crypto-select">Select Cryptocurrency</Label>
            <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
              <SelectTrigger>
                <SelectValue placeholder="Select cryptocurrency" />
              </SelectTrigger>
              <SelectContent>
                {cryptoOptions.map((crypto) => (
                  <SelectItem key={crypto.symbol} value={crypto.symbol}>
                    {crypto.name} ({crypto.symbol})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="wallet-address">Wallet Address</Label>
            <div className="flex gap-2">
              <Input 
                id="wallet-address" 
                value={cryptoOptions.find(c => c.symbol === selectedCrypto)?.address}
                readOnly
                className="font-mono text-sm"
              />
              <Button variant="outline" size="sm" onClick={handleCopy}>
                Copy
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <div className="flex gap-2">
              <Input 
                id="amount" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                placeholder="0.001"
                min="0"
                step="0.001"
              />
              <div className="py-2 px-3 border rounded-md min-w-20 text-center">
                {selectedCrypto}
              </div>
            </div>
          </div>

          <Button 
            className="w-full"
            onClick={handleDonate}
          >
            Donate
          </Button>
        </div>
      </div>
    </div>
  );
}
