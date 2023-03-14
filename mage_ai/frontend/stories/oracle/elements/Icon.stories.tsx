import React from 'react';
import { Meta, Story } from '@storybook/react';

import ThemeBlock from '../../ThemeBlock';
import {
  Action,
  Add,
  AlertCircle,
  Alphabet,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Backfill,
  Binary,
  BlocksSeparated,
  BlocksStacked,
  CalendarDate,
  CaretDown,
  CaretRight,
  Categories,
  Category,
  Chat,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clone,
  Close,
  Code,
  Column,
  Copy,
  Cursor,
  Edit,
  Ellipsis,
  Email,
  Expand,
  File as FileIcon,
  FileFill as FilledFileIcon,
  Filter,
  Folder,
  Graph,
  GraphWithNodes,
  IDLetters,
  Info,
  Input,
  Insights,
  Lightning,
  MapPin,
  Menu,
  MultiShare,
  NavData,
  NavGraph,
  NavReport,
  NavTree,
  NewBlock,
  NumberHash,
  NumberWithDecimalHash,
  Open,
  ParentEmpty,
  ParentLinked,
  Pause,
  Phone,
  Pipeline,
  PipelineRun,
  PipelineV2,
  PlayButton,
  PreviewHidden,
  PreviewOpen,
  Report,
  RoundedSquare,
  Schedule,
  Search,
  Sensor,
  Settings,
  Sort,
  Stack,
  Sun,
  Switch,
  Terminal,
  TodoList,
  Trash,
} from '@oracle/icons';
import EmptyCharts from '@oracle/icons/custom/EmptyCharts';
import Mage8Bit from '@oracle/icons/custom/Mage8Bit';

const ICONS = [
  Action,
  Add,
  AlertCircle,
  Alphabet,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUp,
  Backfill,
  Binary,
  BlocksSeparated,
  BlocksStacked,
  CalendarDate,
  CaretDown,
  CaretRight,
  Categories,
  Category,
  Chat,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clone,
  Close,
  Code,
  Column,
  Copy,
  Cursor,
  Edit,
  Ellipsis,
  Email,
  EmptyCharts,
  Expand,
  FileIcon,
  FilledFileIcon,
  Filter,
  Folder,
  Graph,
  GraphWithNodes,
  IDLetters,
  Info,
  Input,
  Insights,
  Lightning,
  Mage8Bit,
  MapPin,
  Menu,
  MultiShare,
  NavData,
  NavGraph,
  NavReport,
  NavTree,
  NewBlock,
  NumberHash,
  NumberWithDecimalHash,
  Open,
  ParentEmpty,
  ParentLinked,
  Pause,
  Phone,
  Pipeline,
  PipelineRun,
  PipelineV2,
  PlayButton,
  PreviewHidden,
  PreviewOpen,
  Report,
  RoundedSquare,
  Schedule,
  Search,
  Sensor,
  Settings,
  Sort,
  Stack,
  Sun,
  Switch,
  Terminal,
  TodoList,
  Trash,
];

const Icons = () => (
  <>
    {ICONS.map(Icon => (
      <ThemeBlock
        // @ts-ignore
        key={Icon.displayName}
        reducedPadding
        // @ts-ignore
        title={Icon.displayName}
      >
        <Icon />
      </ThemeBlock>
    ))}
  </>
);

export default {
  component: Icons,
  title: 'Oracle/Icons',
} as Meta;

const Template: Story = () => <Icons />;

export const Main = Template.bind({});
