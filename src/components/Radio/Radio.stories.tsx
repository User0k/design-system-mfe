import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from ".";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "success", "error"],
    },
    radioSize: {
      control: "select",
      options: ["large", "small"],
    },
    shape: {
      control: "select",
      options: ["filled", "pitted"],
    },
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Radio name="radio-group" />
      <Radio name="radio-group" defaultChecked />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radio buttons with mutual exclusion (checking one unchecks the other).",
      },
    },
  },
};

/**
 * Shows all color variants of the radio button.
 */
export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Radio checked color="primary" />
        <span className="text-sm text-gray-500">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Radio checked color="success" />
        <span className="text-sm text-gray-500">Success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Radio checked color="error" />
        <span className="text-sm text-gray-500">Error</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All possible color variants for the radio button.",
      },
    },
  },
};

/**
 * Shows different sizes of radio buttons.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Radio radioSize="small" checked />
        <span className="text-sm text-gray-500">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Radio radioSize="large" checked />
        <span className="text-sm text-gray-500">Large</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Two sizes for different contexts and visual hierarchies.",
      },
    },
  },
};

/**
 * Shows all shape variants of the radio button dot.
 */
export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Radio checked shape="filled" />
        <span className="text-sm text-gray-500">Filled</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Radio checked shape="pitted" />
        <span className="text-sm text-gray-500">Pitted</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Two shape variants for the dot inside the radio button.",
      },
    },
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled radio button in checked state.",
      },
    },
  },
};

/**
 * Shows different states of the radio button.
 */
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-700">Normal State</h3>
        <div className="flex gap-4">
          <Radio />
          <Radio checked />
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-700">
          Disabled State
        </h3>
        <div className="flex gap-4">
          <Radio disabled />
          <Radio disabled checked />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different interactive states of the radio button. Disabled buttons prevent interaction.",
      },
    },
  },
};
