import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Home() {
  const testElements = [
    { name: "Form Elements", description: "Practice with various form elements like inputs, checkboxes, and selects" },
    { name: "Tables", description: "Test with sortable and filterable tables" },
    { name: "Dynamic Content", description: "Elements that appear and disappear based on interaction" },
    { name: "Dialogs & Popups", description: "Modal dialogs and popup content" },
    { name: "AJAX Requests", description: "Asynchronous content loading and form submissions" },
    { name: "Drag & Drop", description: "Draggable elements and drop zones" },
    { name: "iFrames", description: "Practice with embedded content" },
    { name: "Locator Practice", description: "Elements with various attributes for practicing different locator strategies" },
  ];

  return (
    <>
      <div className="space-y-6" data-testid="home-page">
        <Card>
          <CardHeader>
            <CardTitle data-testid="welcome-title">Welcome to the Automation Testing Practice Site</CardTitle>
            <CardDescription>
              A site designed for practicing web automation testing with tools like Selenium, Cypress, Playwright, etc.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-600 mb-4" data-testid="welcome-message">
              This site contains various UI elements and patterns commonly found in web applications. Each page focuses on a
              specific aspect of web UI, making it ideal for practicing automation scripts. All elements have proper test IDs
              and accessible attributes to make them easy to target in your tests.
            </p>

            <h3 className="text-lg font-medium mb-2">Available Test Pages</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead data-testid="table-head-name">Name</TableHead>
                  <TableHead data-testid="table-head-description">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {testElements.map((element) => (
                  <TableRow key={element.name} data-testid={`row-${element.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <TableCell className="font-medium">{element.name}</TableCell>
                    <TableCell>{element.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
