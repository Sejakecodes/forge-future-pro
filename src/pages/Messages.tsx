import { useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react";
import { cn } from "@/lib/utils";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(0);

  const chats = [
    {
      id: 0,
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      lastMessage: "Hey, can we schedule a call?",
      time: "5m",
      unread: 2,
      online: true,
    },
    {
      id: 1,
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      lastMessage: "Project looks great! 🎉",
      time: "2h",
      unread: 0,
      online: true,
    },
    {
      id: 2,
      name: "Emma Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      lastMessage: "Can you send the files?",
      time: "1d",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "James Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      lastMessage: "Thanks for the update!",
      time: "2d",
      unread: 0,
      online: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "other",
      text: "Hi! I reviewed your portfolio and I'm impressed with your work.",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Thank you! I'd love to discuss your project in detail.",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "other",
      text: "Great! Can we schedule a call to go over the requirements?",
      time: "10:35 AM",
    },
    {
      id: 4,
      sender: "me",
      text: "Absolutely! I'm available tomorrow afternoon. What time works for you?",
      time: "10:36 AM",
    },
    {
      id: 5,
      sender: "other",
      text: "How about 2 PM EST?",
      time: "10:40 AM",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />
      
      <div className="ml-64 flex-1">
        <TopBar userName="Alex" />
        
        <main className="p-6">
          <div className="mx-auto max-w-7xl">
            <Card className="flex h-[calc(100vh-140px)] overflow-hidden border-border/60 shadow-soft">
              {/* Chat List */}
              <div className="w-80 border-r border-border">
                <div className="border-b border-border p-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search messages..."
                      className="pl-9"
                    />
                  </div>
                </div>
                <div className="overflow-y-auto">
                  {chats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat.id)}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 border-b border-border p-4 transition-colors hover:bg-muted/50",
                        selectedChat === chat.id && "bg-muted/50"
                      )}
                    >
                      <div className="relative">
                        <Avatar className="h-11 w-11">
                          <AvatarImage src={chat.avatar} />
                          <AvatarFallback>{chat.name[0]}</AvatarFallback>
                        </Avatar>
                        {chat.online && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-success" />
                        )}
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-foreground">{chat.name}</p>
                          <span className="text-xs text-muted-foreground">{chat.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="truncate text-sm text-muted-foreground">
                            {chat.lastMessage}
                          </p>
                          {chat.unread > 0 && (
                            <Badge className="ml-2 h-5 min-w-[20px] rounded-full px-1.5 text-xs">
                              {chat.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Window */}
              <div className="flex flex-1 flex-col">
                {/* Chat Header */}
                <div className="flex items-center justify-between border-b border-border p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={chats[selectedChat].avatar} />
                      <AvatarFallback>{chats[selectedChat].name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{chats[selectedChat].name}</p>
                      <p className="text-xs text-success">Online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 space-y-4 overflow-y-auto p-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex",
                        message.sender === "me" ? "justify-end" : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[70%] rounded-2xl px-4 py-2.5",
                          message.sender === "me"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground"
                        )}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p
                          className={cn(
                            "mt-1 text-xs",
                            message.sender === "me"
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          )}
                        >
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="border-t border-border p-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Paperclip className="h-5 w-5" />
                    </Button>
                    <Input
                      placeholder="Type a message..."
                      className="flex-1"
                    />
                    <Button size="icon" className="bg-gradient-primary hover:opacity-90">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Messages;
