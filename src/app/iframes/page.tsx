"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export default function IframesPage() {
  const [selectedTab, setSelectedTab] = useState("simple");
  const [iframeUrl, setIframeUrl] = useState("https://example.com");
  const [iframeKey, setIframeKey] = useState(0); // Used to force iframe refresh

  // Handle URL change and iframe refresh
  const refreshIframe = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-8" data-testid="iframes-page">
      <div>
        <h1 className="text-2xl font-bold tracking-tight" data-testid="page-title">iFrames</h1>
        <p className="text-sm text-zinc-500" data-testid="page-description">
          Practice working with embedded content and cross-frame interactions.
        </p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="simple" data-testid="simple-iframe-tab">Simple iFrame</TabsTrigger>
          <TabsTrigger value="interactive" data-testid="interactive-iframe-tab">Interactive iFrame</TabsTrigger>
          <TabsTrigger value="nested" data-testid="nested-iframe-tab">Nested iFrames</TabsTrigger>
        </TabsList>

        {/* Simple iFrame */}
        <TabsContent value="simple" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Simple iFrame</CardTitle>
              <CardDescription>
                A basic iframe embedding an external website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  value={iframeUrl}
                  onChange={(e) => setIframeUrl(e.target.value)}
                  placeholder="Enter a URL"
                  data-testid="iframe-url-input"
                />
                <Button onClick={refreshIframe} data-testid="refresh-iframe">
                  Load URL
                </Button>
              </div>
              <div className="border rounded-md overflow-hidden">
                <iframe
                  key={iframeKey}
                  src={iframeUrl}
                  className="w-full h-[400px]"
                  title="External Content"
                  data-testid="simple-iframe"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Interactive iFrame with form */}
        <TabsContent value="interactive" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Interactive iFrame</CardTitle>
              <CardDescription>
                An iframe containing a form you can interact with
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md overflow-hidden">
                <iframe
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                    <head>
                      <style>
                        body { font-family: system-ui, sans-serif; padding: 20px; }
                        form { max-width: 400px; margin: 0 auto; }
                        .form-group { margin-bottom: 15px; }
                        label { display: block; margin-bottom: 5px; font-weight: 500; }
                        input, select, textarea {
                          width: 100%;
                          padding: 8px;
                          border: 1px solid #ccc;
                          border-radius: 4px;
                        }
                        button {
                          background-color: #0f172a;
                          color: white;
                          border: none;
                          padding: 10px 15px;
                          border-radius: 4px;
                          cursor: pointer;
                        }
                        .result {
                          margin-top: 20px;
                          padding: 15px;
                          border: 1px solid #ccc;
                          border-radius: 4px;
                          background-color: #f9f9f9;
                          display: none;
                        }
                      </style>
                      <script>
                        function handleSubmit(event) {
                          event.preventDefault();
                          const name = document.getElementById('name').value;
                          const email = document.getElementById('email').value;
                          const age = document.getElementById('age').value;
                          const country = document.getElementById('country').value;

                          const resultDiv = document.getElementById('result');
                          resultDiv.style.display = 'block';
                          resultDiv.innerHTML = '<h3>Form Data:</h3>' +
                            '<p><strong>Name:</strong> ' + name + '</p>' +
                            '<p><strong>Email:</strong> ' + email + '</p>' +
                            '<p><strong>Age:</strong> ' + age + '</p>' +
                            '<p><strong>Country:</strong> ' + country + '</p>';
                        }
                      </script>
                    </head>
                    <body>
                      <h2>User Registration Form</h2>
                      <form id="registrationForm" onsubmit="handleSubmit(event)">
                        <div class="form-group">
                          <label for="name">Name</label>
                          <input type="text" id="name" name="name" required />
                        </div>
                        <div class="form-group">
                          <label for="email">Email</label>
                          <input type="email" id="email" name="email" required />
                        </div>
                        <div class="form-group">
                          <label for="age">Age</label>
                          <input type="number" id="age" name="age" min="18" max="100" />
                        </div>
                        <div class="form-group">
                          <label for="country">Country</label>
                          <select id="country" name="country">
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                            <option value="au">Australia</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <button type="submit">Submit</button>
                      </form>
                      <div id="result" class="result"></div>
                    </body>
                    </html>
                  `}
                  className="w-full h-[600px]"
                  title="Interactive Form"
                  data-testid="interactive-iframe"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Nested iFrames */}
        <TabsContent value="nested" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Nested iFrames</CardTitle>
              <CardDescription>
                Multiple nested iframes for testing complex scenarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md overflow-hidden">
                <iframe
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                    <head>
                      <style>
                        body { font-family: system-ui, sans-serif; padding: 20px; }
                        .container { border: 2px solid #0f172a; padding: 15px; margin-bottom: 15px; border-radius: 4px; }
                        h2 { margin-top: 0; }
                        iframe { border: 1px solid #ccc; margin-top: 10px; width: 100%; }
                        .level { font-weight: bold; color: #0f172a; }
                        button {
                          background-color: #0f172a;
                          color: white;
                          border: none;
                          padding: 8px 12px;
                          border-radius: 4px;
                          cursor: pointer;
                          margin-top: 10px;
                        }
                      </style>
                      <script>
                        function sendMessage() {
                          // Get the frame
                          const level2Frame = document.getElementById('level2Frame');
                          // Post a message to it
                          level2Frame.contentWindow.postMessage('Hello from level 1!', '*');
                        }

                        // Listen for messages
                        window.addEventListener('message', function(event) {
                          document.getElementById('messageDisplay').textContent = event.data;
                        });
                      </script>
                    </head>
                    <body>
                      <div class="container">
                        <h2>iFrame Level 1</h2>
                        <p><span class="level">Level 1</span> - This is the first level iframe</p>
                        <button onclick="sendMessage()">Send Message to Level 2</button>
                        <p>Received message: <span id="messageDisplay">None yet</span></p>

                        <iframe id="level2Frame" src="data:text/html;charset=utf-8,
                          <!DOCTYPE html>
                          <html>
                          <head>
                            <style>
                              body { font-family: system-ui, sans-serif; padding: 20px; }
                              .container { border: 2px solid #2563eb; padding: 15px; margin-bottom: 15px; border-radius: 4px; }
                              h3 { margin-top: 0; }
                              iframe { border: 1px solid #ccc; margin-top: 10px; width: 100%; }
                              .level { font-weight: bold; color: #2563eb; }
                              button {
                                background-color: #2563eb;
                                color: white;
                                border: none;
                                padding: 8px 12px;
                                border-radius: 4px;
                                cursor: pointer;
                                margin-top: 10px;
                              }
                            </style>
                            <script>
                              function sendToParent() {
                                window.parent.postMessage('Hello from level 2!', '*');
                              }

                              function sendToLevel3() {
                                const level3Frame = document.getElementById('level3Frame');
                                level3Frame.contentWindow.postMessage('Message from level 2 to level 3', '*');
                              }

                              // Listen for messages
                              window.addEventListener('message', function(event) {
                                document.getElementById('messageDisplay').textContent = event.data;

                                // Also forward to level 3
                                try {
                                  const level3Frame = document.getElementById('level3Frame');
                                  level3Frame.contentWindow.postMessage('Forwarded: ' + event.data, '*');
                                } catch(e) {
                                  console.error('Error forwarding message', e);
                                }
                              });
                            </script>
                          </head>
                          <body>
                            <div class='container'>
                              <h3>iFrame Level 2</h3>
                              <p><span class='level'>Level 2</span> - This is the second level iframe</p>
                              <button onclick='sendToParent()'>Send to Level 1</button>
                              <button onclick='sendToLevel3()'>Send to Level 3</button>
                              <p>Received message: <span id='messageDisplay'>None yet</span></p>

                              <iframe id='level3Frame' src='data:text/html;charset=utf-8,
                                <!DOCTYPE html>
                                <html>
                                <head>
                                  <style>
                                    body { font-family: system-ui, sans-serif; padding: 20px; }
                                    .container { border: 2px solid #db2777; padding: 15px; border-radius: 4px; }
                                    h4 { margin-top: 0; }
                                    .level { font-weight: bold; color: #db2777; }
                                    button {
                                      background-color: #db2777;
                                      color: white;
                                      border: none;
                                      padding: 8px 12px;
                                      border-radius: 4px;
                                      cursor: pointer;
                                      margin-top: 10px;
                                    }
                                  </style>
                                  <script>
                                    function sendToLevel2() {
                                      window.parent.postMessage(%22Hello from level 3!%22, %22*%22);
                                    }

                                    // Listen for messages
                                    window.addEventListener(%22message%22, function(event) {
                                      document.getElementById(%22messageDisplay%22).textContent = event.data;
                                    });
                                  </script>
                                </head>
                                <body>
                                  <div class=%22container%22>
                                    <h4>iFrame Level 3</h4>
                                    <p><span class=%22level%22>Level 3</span> - This is the third level iframe</p>
                                    <button onclick=%22sendToLevel2()%22>Send to Level 2</button>
                                    <p>Received message: <span id=%22messageDisplay%22>None yet</span></p>
                                  </div>
                                </body>
                                </html>
                              ' height='200' title='Level 3 Frame'></iframe>
                            </div>
                          </body>
                          </html>
                        " height="400" title="Level 2 Frame"></iframe>
                      </div>
                    </body>
                    </html>
                  `}
                  className="w-full h-[600px]"
                  title="Nested iFrames"
                  data-testid="nested-iframe"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
