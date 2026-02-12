import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from ".";
import { FiMail } from "react-icons/fi";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
    },
    color: {
      control: "select",
      options: ["primary", "neutral", "info", "error", "success"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Submit",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default primary button, used for primary actions in forms and flows.",
      },
    },
  },
};

export const Destructive: Story = {
  args: {
    color: "error",
    children: "Delete Item",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Error button, used for destructive actions that remove data or cannot be undone.",
      },
    },
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
  },
  parameters: {
    docs: {
      description: {
        story: "For secondary actions. Border with transparent background.",
      },
    },
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text Button",
  },
  parameters: {
    docs: {
      description: {
        story: "For tertiary actions or inline actions. Minimal visual weight.",
      },
    },
  },
};

export const DisabledNeutral: Story = {
  args: {
    color: "neutral",
    disabled: true,
    children: "Disabled Neutral",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Disabled button, used to prevent interaction because a mandatory action has not been completed.",
      },
    },
  },
};

/**
 * Shows different sizes of buttons.
 */
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="mb-2 text-sm font-medium text-gray-700">
        All possible sizes
      </h3>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Three sizes for different contexts and visual hierarchies.",
      },
    },
  },
};

/**
 * Shows all possible colors of outlined buttons.
 */
export const OutlinedColors: Story = {
  render: () => {
    return (
      <div className="space-y-6">
        <h3 className="mb-2 text-sm font-medium text-gray-700">
          All possible colors
        </h3>
        <Button variant="outlined">Primary Button</Button>
        <Button variant="outlined" color="neutral">
          Secondary Button
        </Button>
        <Button variant="outlined" color="info">
          Info Button
        </Button>
        <Button variant="outlined" color="success">
          Confirm Button
        </Button>
        <Button variant="outlined" color="error">
          Delete Button
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "All possible colors with outlined variant as example.",
      },
    },
  },
};

/**
 * Shows different states of the primary button.
 */
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-700">Normal State</h3>
        <Button>Normal Button</Button>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-700">
          Disabled State
        </h3>
        <div className="flex gap-2">
          <Button disabled>Disabled Button</Button>
          <Button variant="outlined" disabled>
            Disabled Outlined
          </Button>
          <Button variant="text" disabled>
            Disabled Text
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different interactive states of the button. Disabled buttons prevent interaction.",
      },
    },
  },
};

/**
 * Shows buttons with icons.
 */
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-700">
          Icon Color Behavior
        </h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="contained" icon={<FiMail />}>
            Contained
          </Button>
          <Button variant="outlined" icon={<FiMail />}>
            Outlined
          </Button>
          <Button variant="text" icon={<FiMail />}>
            Text
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Buttons can include icons for better visual recognition of actions.",
      },
    },
  },
};
