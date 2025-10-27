import { TopBar } from "@/components/layout/TopBar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownLeft,
  Download,
  CreditCard,
} from "lucide-react";

const Wallet = () => {
  const transactions = [
    {
      id: "TXN-2024-156",
      type: "credit",
      description: "Payment from Sarah Johnson",
      project: "Website Development",
      amount: 2500,
      date: "2024-03-20",
      status: "Completed",
    },
    {
      id: "TXN-2024-155",
      type: "credit",
      description: "Payment from Michael Chen",
      project: "Mobile App Design",
      amount: 3200,
      date: "2024-03-19",
      status: "Completed",
    },
    {
      id: "TXN-2024-154",
      type: "debit",
      description: "Withdrawal to Bank Account",
      project: "-",
      amount: 5000,
      date: "2024-03-18",
      status: "Completed",
    },
    {
      id: "TXN-2024-153",
      type: "credit",
      description: "Payment from Emma Davis",
      project: "Logo Design",
      amount: 800,
      date: "2024-03-17",
      status: "Completed",
    },
    {
      id: "TXN-2024-152",
      type: "credit",
      description: "Payment from James Wilson",
      project: "Brand Identity",
      amount: 1500,
      date: "2024-03-16",
      status: "Completed",
    },
    {
      id: "TXN-2024-151",
      type: "debit",
      description: "Platform Fee",
      project: "-",
      amount: 125,
      date: "2024-03-15",
      status: "Completed",
    },
  ];

  const totalBalance = 45230;
  const availableBalance = 42100;
  const pendingBalance = 3130;

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />
      
      <div className="ml-64 flex-1">
        <TopBar userName="Alex" />
        
        <main className="p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Wallet</h1>
                <p className="text-muted-foreground">Manage your earnings and transactions</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Report
                </Button>
                <Button className="gap-2 bg-gradient-primary hover:opacity-90">
                  <ArrowUpRight className="h-4 w-4" />
                  Withdraw Funds
                </Button>
              </div>
            </div>

            {/* Balance Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-border/60 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Balance</p>
                      <p className="mt-2 text-3xl font-bold text-foreground">
                        R{totalBalance.toLocaleString()}
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-sm text-success">
                        <TrendingUp className="h-3.5 w-3.5" />
                        <span>+23.1% from last month</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-primary/10 p-3">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Available Balance</p>
                      <p className="mt-2 text-3xl font-bold text-foreground">
                        R{availableBalance.toLocaleString()}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Ready to withdraw
                      </p>
                    </div>
                    <div className="rounded-lg bg-success/10 p-3">
                      <ArrowUpRight className="h-6 w-6 text-success" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pending Balance</p>
                      <p className="mt-2 text-3xl font-bold text-foreground">
                        R{pendingBalance.toLocaleString()}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        In escrow (3 projects)
                      </p>
                    </div>
                    <div className="rounded-lg bg-warning/10 p-3">
                      <CreditCard className="h-6 w-6 text-warning" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Transaction History */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Transaction History</CardTitle>
                  <Button variant="outline" size="sm">
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((txn) => (
                      <TableRow key={txn.id}>
                        <TableCell className="font-medium">{txn.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {txn.type === "credit" ? (
                              <div className="rounded-full bg-success/10 p-1">
                                <ArrowDownLeft className="h-3 w-3 text-success" />
                              </div>
                            ) : (
                              <div className="rounded-full bg-destructive/10 p-1">
                                <ArrowUpRight className="h-3 w-3 text-destructive" />
                              </div>
                            )}
                            <span>{txn.description}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{txn.project}</TableCell>
                        <TableCell className="text-muted-foreground">{txn.date}</TableCell>
                        <TableCell>
                          <Badge variant="default" className="bg-success">
                            {txn.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <span
                            className={`font-semibold R{
                              txn.type === "credit" ? "text-success" : "text-destructive"
                            }`}
                          >
                            {txn.type === "credit" ? "+" : "-"}R{txn.amount.toLocaleString()}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Wallet;
