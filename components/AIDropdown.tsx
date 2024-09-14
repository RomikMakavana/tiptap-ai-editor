import { act, useState } from 'react';
import { DropdownButton } from '@/components/ui/Dropdown';
import { Icon } from '@/components/ui/Icon';
import { Surface } from '@/components/ui/Surface';
import { Toolbar } from '@/components/ui/Toolbar';

export const AIDropdown = () => {
  const [openCustomePromt, setOpenCustomePromt] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const [modifyFurtherModel, setModifyFurtherModel] = useState<boolean>(false);
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
          icon: 'NotebookPen',
        },
        {
          name: 'Translate into...',
          icon: 'Languages',
          options: [
            {
              label: 'Back',
              icon: 'ArrowLeft',
              action: () => {
                setSelectedOptions([]);
              }
            },
            {
              label: 'Arabic',
              action: () => {
                setModifyFurtherModel(true);
                setSelectedOptions([]);
              }
            },
            {
              label: 'Bengali',
              action: () => {
                setModifyFurtherModel(true);
                setSelectedOptions([]);
              }
            },
            {
              label: 'Chinese',
              action: () => {
                setModifyFurtherModel(true);
                setSelectedOptions([]);
              }
            },
            {
              label: 'Dutch',
              action: () => {
                setModifyFurtherModel(true);
                setSelectedOptions([]);
              }
            },
            {
              label: 'English',
              action: () => {
                setModifyFurtherModel(true);
                setSelectedOptions([]);
              }
            },
            {
              label: 'French',
              action: () => {
                setModifyFurtherModel(true);
                setSelectedOptions([]);
              }
            },
            {
              label: 'German',
              action: () => {
                setModifyFurtherModel(true);
                setSelectedOptions([]);
              }
            },
            {
              label: 'Hindi',
              action: () => {
                setModifyFurtherModel(true);
                setSelectedOptions([]);
              }
            },
            {
              label: 'Japanese',
              action: () => {
                setModifyFurtherModel(true);
                setSelectedOptions([]);
              }
            },
            {
              label: 'Korean',
              action: () => {
                setModifyFurtherModel(true);
                setSelectedOptions([]);
              }
            },
            {
              label: 'Nepali',
              action: () => {
                setModifyFurtherModel(true);
                setSelectedOptions([]);
              }
            },
            {
              label: 'Portuguese',
              action: () => {
                setModifyFurtherModel(true);
                setSelectedOptions([]);
              }
            },
            {
              label: 'Spanish',
              action: () => {
                setModifyFurtherModel(true);
                setSelectedOptions([]);
              }
            }
          ]
        },
        {
          name: 'Change style to...',
          icon: 'ScrollText',
          options: [
            {
              label: 'Back',
              icon: 'ArrowLeft',
              action: () => {
                setSelectedOptions([]);
              }
            },
            {
              label: 'Professional',
              action: () => {
                setSelectedOptions([]);
                setModifyFurtherModel(true);
              }
            },
            {
              label: 'Straightforward',
              action: () => {
                setSelectedOptions([]);
                setModifyFurtherModel(true);
              }
            },
            {
              label: 'Friendly',
              action: () => {
                setSelectedOptions([]);
                setModifyFurtherModel(true);
              },
            },
            {
              label: 'Confident',
              action: () => {
                setSelectedOptions([]);
                setModifyFurtherModel(true);
              },
            },
            {
              label: 'Fun',
              action: () => {
                setSelectedOptions([]);
                setModifyFurtherModel(true);
              }
            }
          ]
        }
      ]
    }
  ];

  const modifyFurther = [
    {
      label: 'Modify further',
      buttons: [
        {
          name: 'Continue writing',
          icon: 'StepForward'
        },
        {
          name: 'Regenerate',
          icon: 'RotateCcw'
        },
        {
          name: 'Other options',
          icon: 'Menu'
        }
      ]
    },
  ]

  const replaceSelectionHandler = () => {

  }

  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full animate-pop-up">
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
            <div className="w-full">
              {modifyFurtherModel &&
                <div className='p-2 flex gap-2 justify-between'>
                  <p className=" text-sm whitespace-nowrap border-current relative animate-type bg-gradient-to-r from-neutral-500 to-neutral-500 bg-clip-text text-transparent">
                    We are IOI Studio, We are IOI Studio
                  </p>
                  <Icon name="Copy" className='text-neutral-500'/>
                </div>
              }
              <div className={`${modifyFurtherModel ? 'border-t' : ''} flex h-full`}>
                <input
                  type="text"
                  placeholder="Enter custom prompt..."
                  className="w-full p-2 text-sm text-neutral-500 rounded-md border-neutral-200 dark:border-neutral-800 focus:ring-0 focus:outline-none"
                />
                <button className={`${modifyFurtherModel ? 'rounded-br-md ' : 'rounded-tr-md rounded-br-md'} text-periwinkle-blue hover:bg-neutral-100 w-12`}>
                  <Icon name="Sparkles" className="w-4 h-4 mx-auto" />
                </button>
              </div>
            </div>
          )}
        </Surface>
      </div>

      {openCustomePromt && (
        <div className="w-full animate-pop-up">
          <Surface className='max-h-72 overflow-auto'>
            <div className="p-1">
              {selectedOptions.length === 0 && !modifyFurtherModel &&
                AiButtons.map((item, index) => (
                  <div key={index} className="my-2 last:border-t last:pt-3">
                    <p className="text-sm font-[500] ml-2 mb-1 text-black text-opacity-50">{item.label}</p>
                    {item.buttons.map((button, index) => (
                      <div key={index} className="last:mb-2">
                        <DropdownButton onClick={() => button.options ? showOptions(button.options || []) : setModifyFurtherModel(true)}>
                          <Icon name={button.icon} className="text-periwinkle-blue" />
                          <span className="text-dark-gray">{button.name}</span>
                        </DropdownButton>
                      </div>
                    ))}
                  </div>
                ))}
              {selectedOptions.length > 0 && !modifyFurtherModel &&
                selectedOptions.map((option, index) => (
                  <DropdownButton key={index} onClick={option.action}>
                    {option.icon && <Icon name={option.icon} className="text-periwinkle-blue" />}
                    <span className="text-dark-gray">{option.label}</span>
                  </DropdownButton>
                ))}

              {
                selectedOptions.length === 0 && modifyFurtherModel && (
                  <>
                    <DropdownButton className='mb-1'>
                      <Icon name="Replace" className="text-periwinkle-blue" />
                      <span className="text-dark-gray">Replace selection</span>
                    </DropdownButton>
                    <div className='border-t border-b'>
                      {modifyFurther.map((item, index) => (
                        <div key={index} className="my-2">
                          <p className="text-sm font-[500] ml-2 mb-1 text-black text-opacity-50">{item.label}</p>
                          {item.buttons.map((button, buttonIndex) => (
                            <div key={buttonIndex} className="last:mb-2">
                              <DropdownButton onClick={() => showOptions(button.options || [])}>
                                <Icon name={button.icon} className="text-periwinkle-blue" />
                                <span className="text-dark-gray">{button.name}</span>
                              </DropdownButton>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <DropdownButton className='mt-1'>
                      <Icon name="Trash2" className="text-dark-gray text-opacity-65" />
                      <span className="text-dark-gray">Discard</span>
                    </DropdownButton>
                  </>
                )
              }
            </div>
          </Surface>
        </div>
      )}
    </div>
  );
};
