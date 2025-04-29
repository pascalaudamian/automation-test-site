"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function LocatorsPage() {
  const [activeTab, setActiveTab] = useState("basic");
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  return (
    <div className="space-y-8" data-testid="locators-page">
      <div>
        <h1 className="text-2xl font-bold tracking-tight" data-testid="page-title">Locator Practice</h1>
        <p className="text-sm text-zinc-500" data-testid="page-description">
          Practice with various element selection strategies and attributes.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="basic" data-testid="basic-tab">Basic</TabsTrigger>
          <TabsTrigger value="attributes" data-testid="attributes-tab">Attributes</TabsTrigger>
          <TabsTrigger value="relative" data-testid="relative-tab">Relative</TabsTrigger>
          <TabsTrigger value="dynamic" data-testid="dynamic-tab">Dynamic</TabsTrigger>
          <TabsTrigger value="shadow" data-testid="shadow-tab">Shadow DOM</TabsTrigger>
        </TabsList>

        {/* Basic Locators */}
        <TabsContent value="basic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Basic Locators</CardTitle>
              <CardDescription>
                Practice with basic element selection by ID, class, tag name, and name
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">ID Selectors</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    id="button-1"
                    className="px-3 py-2 rounded bg-blue-100"
                    onClick={() => setClickedItem("button-1")}
                  >
                    Button with ID
                  </button>
                  <div
                    id="div-1"
                    className="px-3 py-2 rounded bg-green-100"
                    onClick={() => setClickedItem("div-1")}
                  >
                    Div with ID
                  </div>
                  <span
                    id="span-1"
                    className="px-3 py-2 rounded bg-yellow-100 inline-block"
                    onClick={() => setClickedItem("span-1")}
                  >
                    Span with ID
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Class Selectors</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    className="custom-button px-3 py-2 rounded bg-blue-100"
                    onClick={() => setClickedItem("custom-button")}
                  >
                    Button with Class
                  </button>
                  <button
                    className="primary-button px-3 py-2 rounded bg-purple-100"
                    onClick={() => setClickedItem("primary-button")}
                  >
                    Primary Button
                  </button>
                  <button
                    className="secondary-button px-3 py-2 rounded bg-zinc-100"
                    onClick={() => setClickedItem("secondary-button")}
                  >
                    Secondary Button
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Tag Name Selectors</h3>
                <div className="space-y-2">
                  <p
                    className="paragraph-1 bg-zinc-50 p-2 rounded"
                    onClick={() => setClickedItem("paragraph-1")}
                  >
                    This is a paragraph element
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Placeholder image 1"
                      className="image-1 rounded"
                      onClick={() => setClickedItem("image-1")}
                    />
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Placeholder image 2"
                      className="image-2 rounded"
                      onClick={() => setClickedItem("image-2")}
                    />
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Placeholder image 3"
                      className="image-3 rounded"
                      onClick={() => setClickedItem("image-3")}
                    />
                  </div>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li onClick={() => setClickedItem("list-item-1")}>List item 1</li>
                    <li onClick={() => setClickedItem("list-item-2")}>List item 2</li>
                    <li onClick={() => setClickedItem("list-item-3")}>List item 3</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Name Attribute Selectors</h3>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Input
                      type="text"
                      name="username"
                      placeholder="Username"
                      onClick={() => setClickedItem("input-username")}
                    />
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onClick={() => setClickedItem("input-password")}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      id="male"
                      onClick={() => setClickedItem("radio-male")}
                    />
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      id="female"
                      onClick={() => setClickedItem("radio-female")}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      id="other"
                      onClick={() => setClickedItem("radio-other")}
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
              </div>

              {clickedItem && (
                <div className="mt-6 p-3 bg-blue-50 rounded-md">
                  <p>You clicked: <strong>{clickedItem}</strong></p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Attribute Locators */}
        <TabsContent value="attributes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attribute Locators</CardTitle>
              <CardDescription>
                Practice with element selection by different attributes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Data Attributes</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    data-testid="test-button-1"
                    className="px-3 py-2 rounded bg-blue-100"
                    onClick={() => setClickedItem("test-button-1")}
                  >
                    Button with data-testid
                  </button>
                  <div
                    data-test="test-div"
                    className="px-3 py-2 rounded bg-green-100"
                    onClick={() => setClickedItem("test-div")}
                  >
                    Div with data-test
                  </div>
                  <span
                    data-cy="cypress-element"
                    className="px-3 py-2 rounded bg-yellow-100 inline-block"
                    onClick={() => setClickedItem("cypress-element")}
                  >
                    Span with data-cy
                  </span>
                  <button
                    data-automation="auto-button"
                    className="px-3 py-2 rounded bg-purple-100"
                    onClick={() => setClickedItem("auto-button")}
                  >
                    Button with data-automation
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Aria Attributes</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    aria-label="Close dialog"
                    className="px-3 py-2 rounded bg-blue-100"
                    onClick={() => setClickedItem("close-dialog")}
                  >
                    ✕
                  </button>
                  <div
                    aria-hidden="true"
                    className="px-3 py-2 rounded bg-green-100"
                    onClick={() => setClickedItem("hidden-element")}
                  >
                    Hidden from screen readers
                  </div>
                  <div
                    role="alert"
                    className="px-3 py-2 rounded bg-red-100"
                    onClick={() => setClickedItem("alert-element")}
                  >
                    Alert element
                  </div>
                  <button
                    role="button"
                    aria-pressed="false"
                    className="px-3 py-2 rounded bg-zinc-100"
                    onClick={() => setClickedItem("toggle-button")}
                  >
                    Toggle Button
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Custom Attributes</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    custom-attr="button-1"
                    className="px-3 py-2 rounded bg-blue-100"
                    onClick={() => setClickedItem("custom-attr-button")}
                  >
                    Button with custom attribute
                  </button>
                  <div
                    data-status="active"
                    className="px-3 py-2 rounded bg-green-100"
                    onClick={() => setClickedItem("status-active")}
                  >
                    Active status
                  </div>
                  <span
                    data-type="warning"
                    className="px-3 py-2 rounded bg-yellow-100 inline-block"
                    onClick={() => setClickedItem("warning-type")}
                  >
                    Warning message
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Partial Attribute Matches</h3>
                <div className="grid gap-2">
                  <div
                    title="This is a tooltip text"
                    className="p-2 bg-zinc-50 rounded"
                    onClick={() => setClickedItem("tooltip-element")}
                  >
                    Element with tooltip
                  </div>
                  <div
                    data-user-id="user-12345"
                    className="p-2 bg-zinc-50 rounded"
                    onClick={() => setClickedItem("user-element")}
                  >
                    User related element
                  </div>
                  <div
                    data-target="modal-settings"
                    className="p-2 bg-zinc-50 rounded"
                    onClick={() => setClickedItem("modal-trigger")}
                  >
                    Modal trigger
                  </div>
                </div>
              </div>

              {clickedItem && (
                <div className="mt-6 p-3 bg-blue-50 rounded-md">
                  <p>You clicked: <strong>{clickedItem}</strong></p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Relative Locators */}
        <TabsContent value="relative" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Relative Locators</CardTitle>
              <CardDescription>
                Practice with element selection by their relative position
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Parent-Child Relationships</h3>
                <div className="border p-4 rounded-md bg-zinc-50">
                  <div
                    id="parent-1"
                    className="border p-3 rounded-md bg-white"
                    onClick={() => setClickedItem("parent-1")}
                  >
                    <p>Parent element</p>
                    <div
                      className="mt-2 border p-2 rounded-md bg-blue-50"
                      onClick={() => setClickedItem("child-1")}
                    >
                      Child element 1
                    </div>
                    <div
                      className="mt-2 border p-2 rounded-md bg-green-50"
                      onClick={() => setClickedItem("child-2")}
                    >
                      Child element 2
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Sibling Relationships</h3>
                <div className="border p-4 rounded-md bg-zinc-50">
                  <div className="mt-2 border p-2 rounded-md bg-blue-50" onClick={() => setClickedItem("sibling-1")}>
                    First sibling
                  </div>
                  <div className="mt-2 border p-2 rounded-md bg-green-50" onClick={() => setClickedItem("sibling-2")}>
                    Second sibling
                  </div>
                  <div className="mt-2 border p-2 rounded-md bg-yellow-50" onClick={() => setClickedItem("sibling-3")}>
                    Third sibling
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Adjacent Elements</h3>
                <div className="border p-4 rounded-md bg-zinc-50 grid grid-cols-3 gap-2">
                  <div className="border p-2 rounded-md bg-zinc-100 text-center" onClick={() => setClickedItem("cell-1-1")}>
                    Row 1, Col 1
                  </div>
                  <div className="border p-2 rounded-md bg-zinc-100 text-center" onClick={() => setClickedItem("cell-1-2")}>
                    Row 1, Col 2
                  </div>
                  <div className="border p-2 rounded-md bg-zinc-100 text-center" onClick={() => setClickedItem("cell-1-3")}>
                    Row 1, Col 3
                  </div>
                  <div className="border p-2 rounded-md bg-zinc-200 text-center" onClick={() => setClickedItem("cell-2-1")}>
                    Row 2, Col 1
                  </div>
                  <div className="border p-2 rounded-md bg-zinc-200 text-center" onClick={() => setClickedItem("cell-2-2")}>
                    Row 2, Col 2
                  </div>
                  <div className="border p-2 rounded-md bg-zinc-200 text-center" onClick={() => setClickedItem("cell-2-3")}>
                    Row 2, Col 3
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Nested Structures</h3>
                <div className="border p-4 rounded-md bg-zinc-50">
                  <div className="border p-3 rounded-md bg-white" onClick={() => setClickedItem("level-1")}>
                    Level 1
                    <div className="mt-2 border p-3 rounded-md bg-blue-50" onClick={() => setClickedItem("level-2")}>
                      Level 2
                      <div className="mt-2 border p-3 rounded-md bg-green-50" onClick={() => setClickedItem("level-3")}>
                        Level 3
                        <div className="mt-2 border p-3 rounded-md bg-yellow-50" onClick={() => setClickedItem("level-4")}>
                          Level 4
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {clickedItem && (
                <div className="mt-6 p-3 bg-blue-50 rounded-md">
                  <p>You clicked: <strong>{clickedItem}</strong></p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Dynamic Content */}
        <TabsContent value="dynamic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dynamic Content Locators</CardTitle>
              <CardDescription>
                Practice with dynamically loaded content and changing elements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Dynamic Lists</h3>
                <DynamicList />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Text Content Change</h3>
                <TextChanger />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Attribute Changes</h3>
                <AttributeChanger />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Class Changes</h3>
                <ClassChanger />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Shadow DOM */}
        <TabsContent value="shadow" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Shadow DOM Locators</CardTitle>
              <CardDescription>
                Practice with Shadow DOM elements for advanced selection challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="alert p-4 bg-red-50 border border-red-100 rounded-md mb-4">
                <p>
                  Shadow DOM content is not actually implemented in this demo since it requires more complex setup.
                  In a real Shadow DOM, elements would be encapsulated and not directly accessible through regular selectors.
                </p>
              </div>

              <div className="border p-4 rounded-md bg-zinc-50 mb-6">
                <div className="mb-4">
                  <h3 className="text-md font-medium mb-2">Mock Shadow Host</h3>
                  <div id="shadow-host" className="border p-4 rounded-md bg-white">
                    <p>This div pretends to be a shadow host</p>
                    <div className="mt-2 p-2 border rounded-md bg-blue-50">
                      <p>Shadow content (not real shadow DOM)</p>
                      <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md">
                        Shadow Button
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-md font-medium mb-2">Selection Tips</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>In real Shadow DOM, use special selectors like <code>shadowRoot</code> methods</li>
                    <li>Tools like Playwright and Cypress support special Shadow DOM selection</li>
                    <li>Example: <code>cy.shadow().find('button')</code> in Cypress</li>
                    <li>Or Playwright: <code>locator.locator('pierce/button')</code></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Dynamic list component
function DynamicList() {
  const [items, setItems] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadItems = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setItems([
        "Dynamic Item 1",
        "Dynamic Item 2",
        "Dynamic Item 3",
        "Dynamic Item 4",
        "Dynamic Item 5"
      ]);
      setIsLoading(false);
    }, 1500);
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <div className="space-y-2">
      <div className="flex space-x-2">
        <Button onClick={loadItems} disabled={isLoading} data-testid="load-items-button">
          {isLoading ? "Loading..." : "Load Items"}
        </Button>
        <Button onClick={clearItems} variant="outline" data-testid="clear-items-button">
          Clear
        </Button>
      </div>

      <div className="border rounded-md p-3 min-h-[100px]" data-testid="dynamic-list-container">
        {isLoading ? (
          <div className="flex justify-center items-center h-16" data-testid="loading-indicator">
            <div className="animate-spin h-6 w-6 border-2 border-zinc-600 border-t-transparent rounded-full" />
          </div>
        ) : items.length === 0 ? (
          <p className="text-zinc-400 text-center">No items. Click "Load Items" to load data.</p>
        ) : (
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={index} className="p-2 bg-zinc-50 rounded" data-testid={`dynamic-item-${index + 1}`}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// Text changer component
function TextChanger() {
  const [text, setText] = useState("Initial text");
  const [count, setCount] = useState(0);

  const changeText = () => {
    const texts = [
      "Changed text 1",
      "Different text 2",
      "New content 3",
      "Updated information 4",
      "Fresh text 5"
    ];

    const newCount = (count + 1) % texts.length;
    setText(texts[newCount]);
    setCount(newCount);
  };

  return (
    <div className="space-y-2">
      <Button onClick={changeText} data-testid="change-text-button">
        Change Text
      </Button>

      <div
        className="border rounded-md p-3 bg-zinc-50"
        data-testid="changing-text-container"
      >
        <p data-testid="changing-text">{text}</p>
      </div>
    </div>
  );
}

// Attribute changer component
function AttributeChanger() {
  const [attributes, setAttributes] = useState({
    id: "initial-id",
    role: "button",
    "data-status": "inactive",
  });

  const changeAttributes = () => {
    const statuses = ["inactive", "active", "pending", "completed", "error"];
    const roles = ["button", "switch", "tab", "link", "checkbox"];
    const ids = ["initial-id", "changed-id", "new-id", "different-id", "final-id"];

    const randomIndex = Math.floor(Math.random() * 5);

    setAttributes({
      id: ids[randomIndex],
      role: roles[randomIndex],
      "data-status": statuses[randomIndex],
    });
  };

  return (
    <div className="space-y-2">
      <Button onClick={changeAttributes} data-testid="change-attributes-button">
        Change Attributes
      </Button>

      <div className="border rounded-md p-3 bg-zinc-50">
        <div
          id={attributes.id}
          role={attributes.role}
          data-status={attributes["data-status"]}
          className="p-2 bg-white rounded border"
          data-testid="changing-attributes-element"
        >
          <p>Current attributes:</p>
          <ul className="text-sm list-disc pl-5 mt-1">
            <li>id: {attributes.id}</li>
            <li>role: {attributes.role}</li>
            <li>data-status: {attributes["data-status"]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Class changer component
function ClassChanger() {
  const [activeClass, setActiveClass] = useState("bg-zinc-100");

  const classes = [
    "bg-zinc-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-red-100",
    "bg-purple-100",
  ];

  const changeClass = () => {
    const currentIndex = classes.indexOf(activeClass);
    const nextIndex = (currentIndex + 1) % classes.length;
    setActiveClass(classes[nextIndex]);
  };

  return (
    <div className="space-y-2">
      <Button onClick={changeClass} data-testid="change-class-button">
        Change Class
      </Button>

      <div className="border rounded-md p-3 bg-zinc-50">
        <div
          className={`p-4 rounded ${activeClass} transition-colors duration-300`}
          data-testid="changing-class-element"
        >
          <p>Element with changing class: <span className="font-mono text-sm">{activeClass}</span></p>
        </div>
      </div>
    </div>
  );
}
