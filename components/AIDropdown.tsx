import { useState } from 'react';
import { DropdownButton } from '@/components/ui/Dropdown';
import { Icon } from '@/components/ui/Icon';
import { Surface } from '@/components/ui/Surface';
import { Toolbar } from '@/components/ui/Toolbar';

export const AIDropdown = () => {
  const [openCustomePromt, setOpenCustomePromt] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  
  const openCustomePromtHandler = () => {
    setOpenCustomePromt(true);
  };

  const showOptions = (options: any[]) => {
    setSelectedOptions(options);
  };

  const AiButtons = [
    {
      label: 'Modify writing',
      buttons: [
        {
          name: 'Improve writing',
          icon: 'WandSparkles'
        },
        {
          name: 'Fix mistakes',
          icon: 'SpellCheck'
        },
        {
          name: 'Simplify',
          icon: 'ArrowUpNarrowWide'
        }
      ]
    },
    {
      label: 'Generate',
      buttons: [
        {
          name: 'Summarise',
          icon: 'NotebookPen'
        },
        {
          name: 'Translate into...',
          icon: 'Languages',
          options: [
            { label: 'Back', icon: 'ArrowLeft', action: () => { setSelectedOptions([]); }},
            { label: 'Arabic' },
            { label: 'Bengali' },
            { label: 'Chinese' },
            { label: 'Dutch' },
            { label: 'English' },
            { label: 'French' },
            { label: 'German' },
            { label: 'Hindi' },
            { label: 'Japanese' },
            { label: 'Korean' },
            { label: 'Nepali' },
            { label: 'Portuguese' },
            { label: 'Spanish' }
          ]
        },
        {
          name: 'Change style to...',
          icon: 'ScrollText',
          options: [
            { label: 'Back', icon: 'ArrowLeft', action: () => { setSelectedOptions([]); }},
            { label: 'Professional' },
            { label: 'Straightforward' },
            { label: 'Friendly' },
            { label: 'Confident' },
            { label: 'Fun' }
          ]
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full">
        <Surface>
          {!openCustomePromt ? (
            <button onClick={openCustomePromtHandler}>
              <Toolbar.Button
                className="text-purple-500 hover:text-purple-600 active:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 dark:active:text-purple-400"
                activeClassname="text-purple-600 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-200"
              >
                <Icon name="Sparkles" className="mr-1" />
                AI
                <Icon name="ChevronDown" className="w-2 h-2 ml-1" />
              </Toolbar.Button>
            </button>
          ) : (
            <div className="w-full flex items-center">
              <input
                type="text"
                placeholder="Enter custom prompt..."
                className="w-full p-2 text-sm text-neutral-500 rounded-md border-neutral-200 dark:border-neutral-800 focus:ring-0 focus:outline-none"
              />
              <button className="h-full right-0 w-11 text-periwinkle-blue absolute rounded-br-lg rounded-tr-lg hover:bg-neutral-100 hover:border-t hover:border-r hover:border-b">
                <Icon name="Sparkles" className="w-4 h-4 mx-auto" />
              </button>
            </div>
          )}
        </Surface>
      </div>

      {openCustomePromt && (
        <div className="w-full">
          <Surface>
            <div className="p-1">
              {selectedOptions.length === 0 &&
                AiButtons.map((item, index) => (
                  <div key={index} className="my-2 last:border-t last:pt-3">
                    <p className="text-sm font-[500] ml-2 mb-1 text-black text-opacity-50">{item.label}</p>
                    {item.buttons.map((button, index) => (
                      <div key={index} className="last:mb-2">
                        <DropdownButton onClick={() => showOptions(button.options || [])}>
                          <Icon name={button.icon} className="text-periwinkle-blue" />
                          <span className="text-dark-gray">{button.name}</span>
                        </DropdownButton>
                      </div>
                    ))}
                  </div>
                ))}
              {selectedOptions.length > 0 &&
                selectedOptions.map((option, index) => (
                  <DropdownButton key={index} onClick={option.action}>
                    {option.icon && <Icon name={option.icon} className="text-periwinkle-blue" />}
                    <span className="text-dark-gray">{option.label}</span>
                  </DropdownButton>
                ))}
            </div>
          </Surface>
        </div>
      )}
    </div>
  );
};
