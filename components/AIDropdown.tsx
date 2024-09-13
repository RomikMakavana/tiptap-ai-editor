import { DropdownButton } from '@/components/ui/Dropdown';
import { Icon } from '@/components/ui/Icon';
import { Surface } from '@/components/ui/Surface';
import { Toolbar } from '@/components/ui/Toolbar';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { icons } from 'lucide-react';
import { useState } from 'react';

export const AIDropdown = () => {

  const [openCustomePromt, setOpenCustomePromt] = useState<boolean>(false);

  const openCustomePromtHandler = () => {
    setOpenCustomePromt(true)
  }

  const AiButtons = [
    {
      label : 'Modify writing',
      buttons : [
        {
          name : 'Imporve writing',
          icon : 'WandSparkles'
        },
        {
          name : 'Fix mistakes',
          icon : 'SpellCheck'
        },
        {
          name : 'Simplify',
          icon : 'ArrowUpNarrowWide'
        }
      ]
    },
    {
      label : 'Generate',
      buttons : [
        {
          name : 'Summarise',
          icon : 'NotebookPen'
        },
        {
          name : 'Translate into...',
          icon : 'Languages'
        },
        {
          name : 'Change style to...',
          icon : 'ScrollText'
        }
      ]
    }
  ]
  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full">
        <Surface>
          {
            !openCustomePromt ? (
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
              <div className='w-full flex items-center'>
                <input
                  type="text"
                  placeholder="Enter custom prompt..."
                  className="w-full p-2 text-sm text-neutral-500 rounded-md border-neutral-200 dark:border-neutral-800 focus:ring-0 focus:outline-none"
                />
                <button className='h-full right-0 w-11 text-blue-400 absolute rounded-br-lg rounded-tr-lg hover:bg-neutral-100 hover:border-t hover:border-r hover:border-b '>
                  <Icon name="Sparkles" className="w-4 h-4 mx-auto" />
                </button>
              </div>
            )
          }
        </Surface>
      </div>

      {openCustomePromt &&
        <div className="w-full">
          <div className='w-full'>
            <Surface>
              <div className='p-1'>
                {AiButtons.map((item, index) => (
                  <div key={index} className='first:border-b my-2'>
                    <div>
                      <p className='text-sm font-[500] ml-2 mb-1 text-black text-opacity-50'>{item.label}</p>
                    </div>
                    {item.buttons.map((button, index) => (
                      <div key={index} className='last:mb-2'>
                        <DropdownButton>
                          <Icon name={button.icon} className='text-blue-600' />
                          <span className='text-black'>{button.name}</span>
                        </DropdownButton>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Surface>
          </div>
        </div>}
    </div>
  );
};
